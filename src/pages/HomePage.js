import React from "react";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-3xl font-bold mb-6">Health Risk Calculators</h1>
      <div className="flex flex-col space-y-4">
        <Link to="/framingham">
          <button className="px-6 py-3 bg-blue-500 text-white rounded-lg shadow-lg hover:bg-blue-600">
            Framingham Risk Score
          </button>
        </Link>
        <Link to="/ascvd">
          <button className="px-6 py-3 bg-green-500 text-white rounded-lg shadow-lg hover:bg-green-600">
            ASCVD Risk Estimator
          </button>
        </Link>
      </div>
    </div>
  );
};

export default HomePage;
