import Container from '../../components/Shared/Container'
import { Helmet } from 'react-helmet-async'
import FlatReservation from '../../components/FlatDetails/FlatReservation'
import Heading from '../../components/Shared/Heading'
import LoadingSpinner from '../../components/Shared/LoadingSpinner'
import { useQuery } from '@tanstack/react-query'
import useAxiosSecure from '../../hooks/useAxiosSecure'
import { useParams } from 'react-router-dom'
import useAxiosCommon from '../../hooks/useAxiosCommon'


const FlatDetails = () => {
    const {id} = useParams()
    const axiosCommon = useAxiosCommon()
 

    const {data: flat = {}, isLoading, refetch} = useQuery({
      queryKey: ['flat', id],
      queryFn: async ()=>{
          const { data } = await axiosCommon.get(`/flat/${id}`)
  
          return data
      },
    })
    
  
    if (isLoading) return <LoadingSpinner />

    console.log(flat);


  return (
    <Container>
      <Helmet>
        <title>{flat?.category}</title>
      </Helmet>
      {flat && (
        <div className='max-w-screen-lg mx-auto'>
          {/* Header */}
          <div className='flex flex-col gap-6'>
            <div>
              <Heading title={flat.category} subtitle={flat.apartmentNo} />
              <div className='w-full md:h-[60vh] overflow-hidden rounded-xl'>
                <img
                  className='object-cover w-full'
                  src={flat.image}
                  alt='header image'
                />
              </div>
            </div>
          </div>
          <div className='grid grid-cols-1 md:grid-cols-7 md:gap-10 mt-6'>
            {/* flat Info */}
            <div className='col-span-4 flex flex-col gap-8'>
              <div className='flex flex-col gap-2'>
                <div
                  className='
                text-xl 
                font-semibold 
                flex 
                flex-row 
                items-center
                gap-2
              '
                >
                  <div>Hosted by {flat?.ownerInfo?.name}</div>

                  <img
                    className='rounded-full'
                    height='30'
                    width='30'
                    alt='Avatar'
                    src={flat?.ownerInfo?.image}
                  />
                </div>
                <div
                  className='
                flex 
                flex-row 
                items-center 
                gap-4 
                font-light
                text-neutral-500
              '
                >
                  <div>{flat?.guests} guests</div>
                  <div>{flat?.bedflats} flats</div>
                  <div>{flat?.bathflats} bathflats</div>
                </div>
              </div>

              <hr />
              <div
                className='
          text-lg font-light text-neutral-500'
              >
                {flat?.description}
              </div>
              <hr />
            </div>

            <div className='md:col-span-3 order-first md:order-last mb-10'>
              {/* flatReservation */}
              <FlatReservation refetch={refetch} flat={flat} />
            </div>
          </div>
        </div>
      )}
    </Container>
  )
}

export default FlatDetails
