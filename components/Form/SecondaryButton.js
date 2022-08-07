import React from "react";

const SecondaryButton = ({ type, label }) => (
  <button
    type={type}
    className="w-full flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
  >
    {label}
  </button>
);

export default SecondaryButton;
