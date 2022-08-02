import React from 'react';

const Form = ({ children, method, action }) => (
  <form className="space-y-6"  action={action} method={method}>
    <div className="space-y-6">
        {children}
    </div>
  </form>
);

export default Form;