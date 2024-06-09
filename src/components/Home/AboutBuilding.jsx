import React from 'react';

const AboutBuilding = () => {
  return (
    <section className="bg-gray-100 text-gray-900 py-12">
      <div className="container mx-auto px-6 lg:px-8">
        <h2 className="text-3xl lg:text-5xl font-bold text-center mb-6 text-purple-700">
          About the Building
        </h2>
        <div className="lg:flex lg:items-center lg:justify-center">
          <div className="lg:w-2/3">
            <p className="text-lg lg:text-xl text-center leading-relaxed mb-6">
              Our building is a state-of-the-art residential complex located in the heart of the city. 
              Designed with modern aesthetics and top-notch amenities, it offers a comfortable and luxurious lifestyle. 
              The building features spacious apartments, a rooftop pool, a fully-equipped gym, and a community lounge.
            </p>
            <p className="text-lg lg:text-xl text-center leading-relaxed mb-6">
              Residents can enjoy breathtaking views of the city skyline from their balconies, and the building’s central 
              location provides easy access to shopping centers, restaurants, and public transportation. 
              With 24/7 security and concierge services, we ensure a safe and convenient living environment for all our residents.
            </p>
            <p className="text-lg lg:text-xl text-center leading-relaxed">
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
