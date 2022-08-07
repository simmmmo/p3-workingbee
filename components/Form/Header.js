import React from "react";

const FormHeader = ({ headerText, bodyText }) => (
  <div>
    <h3 className="text-lg leading-6 font-medium text-gray-900">
      {headerText}
    </h3>
    <p className="mt-1 text-sm text-gray-500">{bodyText}</p>
  </div>
);

export default FormHeader;
