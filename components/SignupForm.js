import React, { useCallback, useState, useEffect, useRef } from "react";
import { useRouter } from "next/router";
import { mutate } from "swr";
import Input from "./Form/Input";
import TextArea from "./Form/TextArea";
import FormHeader from "./Form/Header";
import Form from "./Form/Form";
import PrimaryButton from "./Form/PrimaryButton";
import SecondaryButton from "./Form/SecondaryButton";
import FormFooter from "./Form/Footer";

const Wrapper = ({ children }) => (
  <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
    <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
      {children}
    </div>
  </div>
);

const SignupForm = ({  formId, userForm, forNewUser = true }) => {
  const router = useRouter();
  const contentType = "application/json";
  const [errors, setErrors] = useState({});
  const [message, setMessage] = useState("");
  
  const [form, setForm] = useState({
    firstName: userForm.firstName,
    lastName: userForm.lastName,
    phone: userForm.phone,
    email: userForm.email,
    description: userForm.description,
    password: userForm.password,
  });

  /* The PUT method edits an existing entry in the mongodb database. */
  const putData = async (form) => {
    const { id } = router.query;

    try {
      const res = await fetch(`/api/users/${id}`, {
        method: "PUT",
        headers: {
          Accept: contentType,
          "Content-Type": contentType,
        },
        body: JSON.stringify(form),
      });

      // Throw error with status code in case Fetch API req failed
      if (!res.ok) {
        throw new Error(res.status);
      }

      const { data } = await res.json();

      mutate(`/api/users/${id}`, data, false); // Update the local data without a revalidation
      router.push("/");
    } catch (error) {
      setMessage("Failed to update user");
    }
  };

  /* The POST method adds a new entry in the mongodb database. */
  const postData = async (form) => {
    try {
      const res = await fetch("/api/users", {
        method: "POST",
        headers: {
          Accept: contentType,
          "Content-Type": contentType,
        },
        body: JSON.stringify(form),
      });

      // Throw error with status code in case Fetch API req failed
      if (!res.ok) {
        throw new Error(res.status);
      }

      router.push("/");
    } catch (error) {
      setMessage("Failed to add user");
    }
  };

  const handleChange = (e) => {
    const target = e.target;
    const value = target.value;
    const name = target.name;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errs = formValidate();
    if (Object.keys(errs).length === 0) {
      forNewUser ? postData(form) : putData(form);
    } else {
      setErrors({ errs });
    }
  };

  const formValidate = () => {
    let err = {};
    // if (!form.userTitle) err.userTitle = "Title is required";
    // if (!form.userDescription) err.userDescription = "Description is required";
    return err;
  };

  return (
    <Wrapper>
      <Form id={formId} onSubmit={handleSubmit}>
        <FormHeader
          headerText="Personal Informationn"
          bodyText="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        />
        <Input
          type="text"
          name="firstName"
          label="First Name"
          onChange={handleChange}
          value={form.firstName}
          width="sm:col-span-6"
        />
        <Input
          type="text"
          name="lastName"
          label="Last Name"
          onChange={handleChange}
          value={form.lastName}
          width="sm:col-span-6"
        />
        <Input
          type="text"
          name="phone"
          label="Contact Number"
          onChange={handleChange}
          value={form.phone}
          width="sm:col-span-6"
        />
        <Input
          type="email"
          name="email"
          label="Email address"
          onChange={handleChange}
          value={form.email}
          width="sm:col-span-6"
        />
        <TextArea
          rows="10"
          name="description"
          label="Bio Description"
          onChange={handleChange}
          value={form.description}
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

        <div className="pt-5">
          <div className="flex space-x-4">
            <SecondaryButton type="button" label="Cancel" />
            <PrimaryButton type="submit" label="Join" />
          </div>
        </div>
      </Form>
      <FormFooter text="Already a member?" linkText="Sign In" link="signin" />
    </Wrapper>
  );
}

export default SignupForm;