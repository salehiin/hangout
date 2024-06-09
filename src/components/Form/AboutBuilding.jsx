import React from 'react';

const AboutBuilding = () => {
  return (
    <section className="bg-blue-300 text-gray-900 py-12">
      <div className="container mx-auto px-6 lg:px-8">
        <h2 className="text-3xl lg:text-5xl font-bold text-center mb-6 text-gray-900">
          About the Building
        </h2>
        <div className="flex flex-col md:flex-row items-start gap-6">
          {/* Image Section */}
          <div className="md:w-1/2 lg:w-1/2 flex flex-col gap-4">
            <img
              className="w-full h-40 rounded-lg shadow-lg object-cover"
              src="https://i.ibb.co/ccwjY2x/pexels-kate-andreeshcheva-15868531.jpg" // Replace with your image URL
              alt="Building 1"
            />
            <div className="grid grid-cols-2 gap-4">
              <img
                className="w-full h-40 rounded-lg shadow-lg object-cover"
                src="https://i.ibb.co/XpFh9gL/pexels-curtis-adams-3773582.jpg" // Replace with your image URL
                alt="Building 2"
              />
              <img
                className="w-full h-40 rounded-lg shadow-lg object-cover"
                src="https://i.ibb.co/9NYvqBT/pexels-lena-khrupina-2683376.jpg" // Replace with your image URL
                alt="Building 3"
              />
            </div>
          </div>
          {/* Text Section */}
          <div className="md:w-1/2 lg:w-1/2">
            <p className="text-sm lg:text-base leading-relaxed mb-4">
              Our building is a state-of-the-art residential complex located in the heart of the city. 
              Designed with modern aesthetics and top-notch amenities, it offers a comfortable and luxurious lifestyle. 
              The building features spacious apartments, a rooftop pool, a fully-equipped gym, and a community lounge.
            </p>
            <p className="text-sm lg:text-base leading-relaxed mb-4">
              Residents can enjoy breathtaking views of the city skyline from their balconies, and the building’s central 
              location provides easy access to shopping centers, restaurants, and public transportation. 
              With 24/7 security and concierge services, we ensure a safe and convenient living environment for all our residents.
            </p>
            <p className="text-sm lg:text-base leading-relaxed">
              Whether you are looking for a cozy one-bedroom apartment or a spacious three-bedroom unit, 
              our building has something to suit every lifestyle. Come experience urban living at its finest.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};


export default AboutBuilding;
