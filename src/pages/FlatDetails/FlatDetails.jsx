import Container from '../../components/Shared/Container';
import { Helmet } from 'react-helmet-async';
import FlatReservation from '../../components/FlatDetails/FlatReservation';
import Heading from '../../components/Shared/Heading';
import LoadingSpinner from '../../components/Shared/LoadingSpinner';
import { useQuery } from '@tanstack/react-query';
import useAxiosCommon from '../../hooks/useAxiosCommon';
import { useParams } from 'react-router-dom';

const FlatDetails = () => {
  const { id } = useParams();
  const axiosCommon = useAxiosCommon();

  const { data: flat = {}, isLoading, refetch } = useQuery({
    queryKey: ['flat', id],
    queryFn: async () => {
      const { data } = await axiosCommon.get(`/flat/${id}`);
      return data;
    },
  });

  if (isLoading) return <LoadingSpinner />;

  return (
    <div className='bg-gray-900'>
        <Container>
      <Helmet>
        <title>HangOut | {flat?.category}</title>
      </Helmet>
      {flat && (
        <div className="max-w-screen-lg mx-auto mt-5 py-6">
          {/* Header */}
          <Heading title={flat.category} subtitle={flat.apartmentNo} />
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-6">
            {/* Image */}
            <div className="lg:col-span-2">
              <img
                className="w-full h-full rounded-lg"
                src={flat.image}
                alt="header image"
              />
            </div>
            {/* Details */}
            <div className="flex flex-col justify-between gap-8 lg:col-span-1">
              <div className="flex flex-col gap-2">
                <div className="text-xl font-semibold flex items-center gap-2">
                  <div className='text-blue-300'>Hosted by {flat?.ownerInfo?.name}</div>
                  <img
                    className="rounded-full"
                    height="30"
                    width="30"
                    alt="Avatar"
                    referrerPolicy="no-referrer"
                    src={flat?.ownerInfo?.image}
                  />
                </div>
                <div className="flex flex-row items-center gap-4 font-light text-yellow-500">
                  <div>{flat?.guest} guests</div>
                  <div>{flat?.beds} beds</div>
                  <div>{flat?.baths} baths</div>
                </div>
              </div>
              <hr className="border-neutral-200" />
              <div className="text-lg font-light text-blue-300">
                {flat?.description}
              </div>
              <hr className="border-neutral-200" />
              {/* FlatReservation */}
              <FlatReservation refetch={refetch} flat={flat} />
            </div>
          </div>
        </div>
      )}
        </Container>
    </div>
    
  );
};

export default FlatDetails;
