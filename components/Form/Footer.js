import React from 'react';

const FormFooter = ({ text, linkText, link }) => (
  <div className="mt-6">
  <div className="relative">
  <div className="w-full border-t border-gray-300" />
    <div className="relative flex justify-center text-sm">
      <p className="mt-5 text-center text-sm text-gray-600">
       {text}
      </p>
    </div>
    <div className="relative flex justify-center text-sm">
      <p className="mt-1 text-center text-sm text-gray-600">
        <a href={link} className="font-medium text-indigo-600 hover:text-indigo-500">
        {linkText}
        </a>
      </p>
    </div>
  </div>
</div>
);

export default FormFooter;