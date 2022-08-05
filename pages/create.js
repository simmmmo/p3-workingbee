import EventForm from '../components/EventForm';

export default function NewEvent() {
  
  const eventForm = {
    title: '',
    subTitle: '',
    organisationName: '',
    category: '',
    date: '',
    startTime: '',
    endTime: '',
    description: '',
    eventImage: '',
    // locationSearch: '',
    locationName: '',
    address: '',
    suburb: '',
    state: '',
    postcode: '',
    lat: '',
    long: '',
    link: '',
  }

  return (
  <>
      <div className="min-h-full flex flex-col justify-center py-12 sm:px-6 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-md">
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Create an event</h2>
          <p className="mt-2 text-center text-sm text-gray-500">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </div>
        <EventForm formId="add-event-form" eventForm={eventForm}/>
      </div>
  </>
  )
}
