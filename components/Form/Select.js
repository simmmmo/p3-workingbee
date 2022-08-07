import React from "react";
import FormLabel from "./Label";

const SelectField = ({
  children,
  name,
  label,
  onChange,
  type,
  value,
  width,
}) => (
  <div className={width}>
    <FormLabel name={name} label={label} />
    <div className="mt-1">
      <select
        type={type}
        name={name}
        id={name}
        onChange={onChange}
        value={value}
        className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
      >
        {children}
      </select>
    </div>
  </div>
);

export default SelectField;
