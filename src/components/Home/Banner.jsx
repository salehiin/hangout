

const Banner = () => {
  return (
    <div className="flex flex-col-reverse md:flex-row justify-center items-center md:h-screen">
      {/* Left Half */}
      <div className="md:w-1/2 pt-4 md:pt-0 px-2 md:px-8">
        <h2 className="text-3xl md:text-3xl lg:text-[55px] md:leading-[60px] font-bold md:pb-4 lg:pb-7">Live Your Space.<br></br> Love Your Life.</h2>
        <p className="text-blue-500 lg:text-lg">
          Welcome to our serene living spaces, where comfort meets tranquility. Explore our collection of homes designed for cozy living, providing the perfect retreat from the hustle and bustle of daily life. With inviting interiors and peaceful surroundings, you'll find yourself embracing the warmth and relaxation of home.
        </p>
      </div>

      {/* Right Half */}
      <div className="md:w-1/2 rounded-3xl md:overflow-hidden md:mr-6">
        <img src="https://i.ibb.co/BsLQWH6/992ceffe-86d2-42b0-93b8-c24427806cca.webp" alt="Landscape" className="w-ful h-full object-cover" />
      </div>
      <div className="flex items-center justify-center  -ml-52 -mb-64 bg-yellow-500 w-44 p-1 rounded-2xl -skew-y-12">
        <div className="text-gray-900">
          <p className="text-sm ">Use promo code</p>
          <p className="text-[18px] font-bold text-red-600">HO3024</p>
          <p className="text-sm">To get 30% off</p>
        </div>
        <img className="w-10 h-10 rounded-full" src="https://i.postimg.cc/wMm1Grc4/ho.jpg" alt="" />
      </div>
    </div>
  );
};

export default Banner;



// import React from 'react';

// const HomeLayout = () => {
//   return (
//     <div className="flex justify-center items-center h-screen">
//       {/* Left Half */}
//       <div className="w-1/2 p-8 bg-gray-100 rounded-xl mr-8">
//         <h2 className="text-3xl font-bold mb-4">Cozy Tranquil Homes</h2>
//         <p className="text-gray-700">
//           Welcome to our serene living spaces, where comfort meets tranquility. Explore our collection of homes designed for cozy living, providing the perfect retreat from the hustle and bustle of daily life. With inviting interiors and peaceful surroundings, you'll find yourself embracing the warmth and relaxation of home.
//         </p>
//       </div>

//       {/* Right Half */}
//       <div className="w-1/2 rounded-xl overflow-hidden">
//         <img src="https://i.ibb.co/BsLQWH6/992ceffe-86d2-42b0-93b8-c24427806cca.webp" className="w-616 h-385 object-cover" />
//       </div>
//     </div>
//   );
// };

// export default HomeLayout;


