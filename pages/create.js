import EventForm from "../components/EventForm";
import { useSession, signIn, signOut } from "next-auth/react";

export default function NewEvent() {
  const { data: session } = useSession();
  
  const eventForm = {
    title: "",
    subTitle: "",
    organisationName: "",
    category: "",
    date: "",
    startTime: "",
    endTime: "",
    description: "",
    eventImage: "",
    // locationSearch: '',
    locationName: "",
    address: "",
    suburb: "",
    state: "",
    postcode: "",
    lat: "",
    long: "",
    link: "",
    createdBy: "",
  };

  return (
    <>
    
      <div className="min-h-full flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      
      {session?.user && (
        <>   
        <div className="sm:mx-auto sm:w-full sm:max-w-md">
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Create an event
          </h2>
          <p className="mt-2 text-center text-sm text-gray-500">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </div>
            <EventForm formId="add-event-form" eventForm={eventForm} createdBy={session?.user.email}/>
           
        </>   
        
        )}

        {!session && (
          <>
       <div className="sm:mx-auto sm:w-full sm:max-w-md">
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
          Please sign in to create an event
          </h2>
          <p className="mt-2 mb-6 text-center text-sm text-gray-500">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </div>
          <div className="sm:mx-auto sm:w-full sm:max-w-md">
           <button className="w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-500 hover:bg-gray-50" onClick={() => signIn()}>Sign in to contributor</button>
         </div>
        
           </>
          )}
       </div>
    </>
  );
}
