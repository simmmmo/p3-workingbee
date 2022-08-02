import EventForm from '../components/EventForm';

export default function NewEvent() {
  return (
  <>
  {/* <div className="bg-white">
    <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
      <div className="text-center">
        <h2 className="text-base font-semibold text-indigo-600 tracking-wide uppercase">Create an event</h2>
        <p className="max-w-xl mt-5 mx-auto text-xl text-gray-500">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc non sagittis nulla, eu luctus augue. 
        </p>
      </div>
    </div>
  </div>
  <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">  */}
         <div className="min-h-full flex flex-col justify-center py-12 sm:px-6 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-md">
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Create an event</h2>
          <p className="mt-2 text-center text-sm text-gray-500">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </div>
   <EventForm />
  </div>
  </>
  )
}
