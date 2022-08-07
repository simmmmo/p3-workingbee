import React from "react";
import FormHeader from "./Header";
import Divider from "./Divider";

const FieldContainer = ({ children, headerText, bodyText }) => (
  <div className="pt-5">
    <FormHeader headerText={headerText} bodyText={bodyText} />
    <div className="mt-6 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
      {children}
    </div>
    <Divider />
  </div>
);

export default FieldContainer;
