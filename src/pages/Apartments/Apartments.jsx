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
                        <h2 className="text-white text-xl font-bold mb-2">
                          {flat.title}
                        </h2>
                        <p className="text-white text-sm mb-4">
                          {flat.description}
                        </p>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-white">Price: ${flat.price}</span>
                        <span className="text-white">Rooms: {flat.rooms}</span>
                      </div>
                      <div className="flex items-center mt-2">
                        <span className="text-sm text-white">
                          Location: {flat.location}
                        </span>
                      </div>
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
