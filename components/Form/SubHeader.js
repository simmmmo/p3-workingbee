import React from "react";

const FormSubHeader = ({ subHeaderText }) => (
  <>
    <legend className="sr-only">{subHeaderText}</legend>
    <div className="text-base font-medium text-gray-900" aria-hidden="true">
      {subHeaderText}
    </div>
  </>
);

export default FormSubHeader;
