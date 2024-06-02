import { Helmet } from 'react-helmet-async'
import Categories from '../../components/Categories/Categories'
// import Rooms from '../../components/Home/Rooms'
import Flats from '../../components/Home/Flats'

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>StayVista | Vacation Homes & Condo Rentals</title>
      </Helmet>
      {/* Categories section  */}
      <Categories />
      {/* Rooms section */}
      <Flats />
    </div>
  )
}

export default Home
