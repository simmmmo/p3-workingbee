import React, { useCallback, useState } from "react";
import Input from "./Form/Input";
import Form from "./Form/Form";
import PrimaryButton from "./Form/PrimaryButton";
import FormFooter from "./Form/Footer";

const Wrapper = ({ children }) => (
  <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
    <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
      {children}
    </div>
  </div>
);

export default function SigninForm() {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });
  const handleChange = (e) => {
    const target = e.target;
    const value = target.value;
    const name = target.name;

    setForm({
      ...form,
      [name]: value,
    });
  };

  return (
    <Wrapper>
      <Form action="#" method="POST">
        <Input
          type="email"
          name="email"
          label="Email address"
          onChange={handleChange}
          value={form.email}
          width="sm:col-span-6"
        />
        <Input
          type="password"
          name="password"
          label="Password"
          onChange={handleChange}
          value={form.password}
          width="sm:col-span-6"
        />
        <PrimaryButton type="submit" label="Sign in" />
      </Form>
      <FormFooter
        text="Not a member?"
        linkText="Join WorkingBee today"
        link="join"
      />
    </Wrapper>
  );
}
