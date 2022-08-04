import React from 'react';

const Form = ({ children, method, action, id, onSubmit }) => (
  <form className="space-y-6"  action={action} method={method} id={id} onSubmit={onSubmit}>
    <div className="space-y-6">
        {children}
    </div>
  </form>
);

export default Form;