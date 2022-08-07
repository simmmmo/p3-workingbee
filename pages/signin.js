import SigninForm from "../components/SigninForm";

export default function Signin() {
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
            Sign in
          </h2>
        </div>
        <SigninForm />
      </div>
    </>
  );
}
