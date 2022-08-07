import React from "react";

const FormLabelField = ({ name, label }) => (
  <label htmlFor={name} className="block text-sm font-medium text-gray-700">
    {label}
  </label>
);

export default FormLabelField;
