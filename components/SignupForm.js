import React, { useCallback, useState } from 'react';
import Input from './Form/Input';
import TextArea from './Form/TextArea';
import FormHeader from './Form/Header';
import Form from './Form/Form';
import PrimaryButton from './Form/PrimaryButton';
import SecondaryButton from './Form/SecondaryButton';
import FormFooter from './Form/Footer';

const Wrapper = ({ children }) => (
  <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
    <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
      {children}
    </div>
  </div>
);

export default function SignupForm () {

  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    description: '',
    password: '',
  });
  
  const handleChange = (e) => {
    const target = e.target
    const value = target.value
    const name = target.name

    setForm({
      ...form,
      [name]: value,
    })
  }

  return (
    <Wrapper>
      <Form action="#" method="POST">
        <FormHeader headerText="Personal Informationn" bodyText="Lorem ipsum dolor sit amet, consectetur adipiscing elit." />
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
          <SecondaryButton type="button" label="Cancel"/>
          <PrimaryButton type="submit" label="Join"/>
          </div>
        </div>
     </Form>
     <FormFooter 
        text="Already a member?" 
        linkText="Sign In" 
        link="signin" 
      /> 
    </Wrapper>
  )
}