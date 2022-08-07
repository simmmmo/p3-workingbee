import React from "react";
import FormLabel from "./Label";

const TextAreaField = ({ name, label, onChange, value, rows, width, help }) => (
  <div className={width}>
    <FormLabel name={name} label={label} />
    <div className="mt-1">
      <textarea
        name={name}
        id={name}
        onChange={onChange}
        rows={rows}
        value={value}
        className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
      />
    </div>
    <p className="mt-2 text-sm text-gray-500">{help}</p>
  </div>
);

export default TextAreaField;
