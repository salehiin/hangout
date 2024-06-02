
import Card from './Card'
import Container from '../Shared/Container'
import Heading from '../Shared/Heading'
// import LoadingSpinner from '../Shared/LoadingSpinner'
import { useQuery } from '@tanstack/react-query'
import LoadingSpinner from '../../components/Shared/LoadingSpinner'
import useAxiosCommon from '../../hooks/useAxiosCommon'
import { useSearchParams } from 'react-router-dom'

const Flats = () => {
  const axiosCommon = useAxiosCommon()
  // eslint-disable-next-line no-unused-vars
  const [params, setParams] = useSearchParams()
 const category = params.get('category')
 console.log(category)

  const {data: flats = [], isLoading} = useQuery({
    queryKey: ['flats', category],
    queryFn: async ()=>{
        const { data } = await axiosCommon.get(`/flats?category=${category}`)

        return data
    },
  })
  

  if (isLoading) return <LoadingSpinner />
  

  return (
    <Container>
      {flats && flats.length > 0 ? (
        <div className='pt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-8'>
          {flats.map(flat => (
            <Card key={flat._id} flat={flat} />
          ))}
        </div>
      ) : (
        <div className='flex items-center justify-center min-h-[calc(100vh-300px)]'>
          <Heading
            center={true}
            title='No flats Available In This Category!'
            subtitle='Please Select Other Categories.'
          />
        </div>
      )}
    </Container>
  )
}

export default Flats

//day-1 P-4
