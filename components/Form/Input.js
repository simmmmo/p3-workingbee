import React from 'react';
import FormLabel from './Label';

const TextField = ({ name, label, onChange, type, value, placeholder, width }) => (
  <div className={width}>
    <FormLabel name={name} label={label} />
    <div className="mt-1">
      <input
        type={type}
        name={name}
        id={name}
        onChange={onChange}
        value={value}
        placeholder={placeholder}
        className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
      />
    </div>
  </div>
);

export default TextField;