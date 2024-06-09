import React from 'react';
import LocationMap from './LocationMap';

const LocationDetails = () => {
  return (
    <section className="bg-gray-100 py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl lg:text-5xl font-bold mb-6 text-center text-gray-900">Location & Directions</h2>
        
        {/* Map or Image */}
        <div className="mb-8">
          {/* You can use an npm package for a map component here, or simply an image */}
          {/* Example with an image */}
          {/* <img src="your-map-image.jpg" alt="Map" className="w-full rounded-lg shadow-lg" /> */}
          <LocationMap></LocationMap>
        </div>
        
        {/* Location Details */}
        <div className="flex flex-col lg:flex-row justify-between">
          <div className="lg:w-1/2 mb-6 lg:mb-0">
            <h3 className="text-xl font-semibold mb-2 text-blue-300">Address:</h3>
            <p className="text-lg text-gray-900">1234 Apartment St, City, Country</p>
          </div>
          <div className="lg:w-1/2">
            <h3 className="text-xl font-semibold mb-2 text-blue-300">How to Get There:</h3>
            <p className="text-lg text-gray-900">Drive along Main Street, turn left on Oak Avenue, and continue straight ahead for 2 miles.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationDetails;
