import { useQuery } from "@tanstack/react-query";
import useAxiosCommon from "../../hooks/useAxiosCommon";
import { useSearchParams, Link } from "react-router-dom";
import LoadingSpinner from "../../components/Shared/LoadingSpinner";
import shortDetails from "../Apartments/shortDetails";
// import anu from '../../components/Home/'

const Apartments = () => {
  const axiosCommon = useAxiosCommon();
  const [params, setParams] = useSearchParams();
  const category = params.get("category");

  const { data: flats = [], isLoading } = useQuery({
    queryKey: ["flats", category],
    queryFn: async () => {
      const { data } = await axiosCommon.get(`/flats?category=${category}`);
      return data;
    },
  });

  if (isLoading) return <LoadingSpinner />;

  return (
    <>
      <shortDetails />
      <div className="bg-blue-300">
        <div className="container mx-auto py-12">
          <div className="grid gap-8 lg:grid-cols-2 xl:grid-cols-3">
            {flats && flats.length > 0 ? (
              flats.map((flat) => (
                // Link to={`/flat/${flat?._id}`}
                <Link
                  key={flat._id}
                  to={`/flat/${flat._id}`}
                  className="hover:no-underline"
                >
                  <div
                    className="bg-white rounded shadow-md overflow-hidden"
                    style={{
                      backgroundImage: `url(${flat.image})`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                    }}
                  >
                    <div className="bg-gray-900 bg-opacity-50 p-6 h-full flex flex-col justify-between">
                      <div>
                        <h2 className="text-xl font-bold mb-2 text-blue-300">
                          {flat.title} / {flat.apartmentNo}
                        </h2>
                        <p className="text-white text-sm mb-4 text-yellow-500">
                          {flat.description}
                        </p>
                        {/* <p className="text-white">Flat: {flat.apartmentNo}</p> */}
                      </div>
                      <div className="flex items-center justify-between font-semibold text-yellow-500">
                        <span className="">Block: {flat.blockName}</span>
                        <span className="">Floor: {flat.floorNo}</span>
                      </div>
                      <div className="flex items-center justify-between font-semibold text-yellow-500 mt-2">
                        <span className=" ">Location: {flat.location}</span>
                        <span className=" ">Rent: ${flat.rent}</span>
                      </div>
                      <h5 className="text-right font-bold text-blue-300 pt-4">View Details ...</h5>
                    </div>
                  </div>
                </Link>
              ))
            ) : (
              <div className="flex items-center justify-center min-h-[calc(100vh-300px)]">
                <p className="text-gray-600">
                  No flats Available In This Category! Please Select Other
                  Categories.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Apartments;
