import React from 'react';
import FormLabel from './Label';

const SelectField = ({ name, label, onChange, type, value, width }) => (
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
        <option>1</option>
        <option>2</option>
        <option>3</option>
      </select>
    </div>
  </div>
);

export default SelectField;