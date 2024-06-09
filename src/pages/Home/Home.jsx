import { Helmet } from 'react-helmet-async';
import Categories from '../../components/Categories/Categories';
import Flats from '../../components/Home/Flats';
import Banner from '../../components/Home/Banner';
import AboutBuilding from '../../components/Form/AboutBuilding';
import LocationDetails from '../../components/Home/LocationDetails';

const Home = () => {
  return (
    <div className="bg-gray-900 text-white min-h-screen lg:px-9">
      <Helmet>
        <title>HangOut | Cozy Tranquil Homes</title>
      </Helmet>
      {/* Header */}
      {/* <header className="bg-purple-900 py-4">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl font-bold">Welcome to StayVista</h1>
          <p className="text-lg mt-4">Discover Amazing Getaways for Your Next Adventure</p>
        </div>
      </header> */}
      <Banner></Banner>

      {/* Main Content */}
      <div className="container mx-auto flex flex-col md:flex-row mt-8">
        {/* Categories section */}
        <section className="lg:w-1/4 px-4">
          <h2 className="text-2xl font-bold mb-4 text-purple-200 text-center">Categories</h2>
          <Categories />
        </section>

        {/* Featured s section */}
        <section className="lg:w-3/4 px-4">
          <h2 className="text-2xl font-bold mb-4 text-purple-200">Featured Flats</h2>
          <Flats />
        </section>
      </div>
      <AboutBuilding></AboutBuilding>
      <LocationDetails></LocationDetails>
    </div>
  );
};

export default Home;
