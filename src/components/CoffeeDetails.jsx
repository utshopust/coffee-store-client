// import React from "react";
// import { useLoaderData } from "react-router";

// const CoffeeDetails = () => {
//   const detailCoffee = useLoaderData();
//   console.log(detailCoffee);
//   return <div>
//     <h1>Name: {detailCoffee.name}</h1>

//   </div>;
// };

// export default CoffeeDetails;

import React from "react";
import { useLoaderData, Link } from "react-router";

const CoffeeDetails = () => {
  const coffee = useLoaderData();

  return (
    <div className="bg-[#F5F3EE] min-h-screen p-8">
      {/* Back to home */}
      <div className="mb-6">
        <Link
          to="/"
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white shadow-sm border border-gray-300 text-gray-700 text-sm hover:bg-gray-100 transition"
        >
          <span className="text-lg">←</span>
          Back to home
        </Link>
      </div>

      {/* Main container */}
      <div className="max-w-5xl mx-auto bg-white shadow-md rounded-xl p-10 flex items-center gap-10">
        {/* Coffee Image */}
        <div className="flex-1 flex justify-center">
          <img
            src={coffee.photo}
            alt={coffee.name}
            className="w-72 h-auto object-contain"
          />
        </div>

        {/* Details */}
        <div className="flex-1">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Niceties</h2>

          <div className="space-y-3 text-gray-700">
            <p>
              <span className="font-semibold">Name:</span> {coffee.name}
            </p>

            <p>
              <span className="font-semibold">Supplier:</span> {coffee.supplier}
            </p>
            <p>
              <span className="font-semibold">Taste:</span> {coffee.taste}
            </p>

            <p>
              <span className="font-semibold">Details:</span> {coffee.details}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoffeeDetails;
