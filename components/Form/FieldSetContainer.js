import React from "react";
import FormHeader from "./Header";
import FormSubHeader from "./SubHeader";

const FieldSetContainer = ({
  children,
  headerText,
  subHeaderText,
  bodyText,
}) => (
  <div className="pt-5">
    <FormHeader headerText={headerText} bodyText={bodyText} />
    <div className="mt-6">
      <fieldset>
        <FormSubHeader subHeaderText={subHeaderText} />
        <div className="mt-4 space-y-4">{children}</div>
      </fieldset>
    </div>
  </div>
);

export default FieldSetContainer;
