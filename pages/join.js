import SignupForm from "../components/SignupForm";

export default function NewUser() {

    const userForm = {
      firstName: "",
      lastName: "",
      phone: "",
      email: "",
      description: "",
      password: "",
  };

  return (
    <>
      <div className="min-h-full flex flex-col justify-center py-12 sm:px-6 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-md">
          <img
            className="mx-auto h-12 w-auto"
            src="https://s3.ap-southeast-2.amazonaws.com/testenv.com.au/bootcamp/working-bee/workingbee-logo.png"
            alt="Workflow"
          />
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Join WorkingBee
          </h2>
          <p className="mt-2 text-center text-sm text-gray-500">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </div>
        <SignupForm formId="add-user-form" userForm={userForm} /> 
      </div>
    </>
  );
}
