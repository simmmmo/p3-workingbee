import { useRouter } from "next/router";
import useSWR from "swr";
import EventForm from "../../../components/EventForm";

const fetcher = (url) =>
  fetch(url)
    .then((res) => res.json())
    .then((json) => json.data);

const EditEvent = () => {
  const router = useRouter();
  const { id } = router.query;
  const { data: event, error } = useSWR(
    id ? `/api/events/${id}` : null,
    fetcher
  );

  // console.log({ event });

  if (error) return <p>Failed to load</p>;
  if (!event) return <p>Loading...</p>;

  const eventForm = {
    title: event.title,
    subTitle: event.subTitle,
    organisationName: event.organisationName,
    category: event.category,
    date: event.date,
    startTime: event.startTime,
    endTime: event.endTime,
    description: event.description,
    eventImage: event.eventImage,
    // locationSearch: event.locationSearch,
    locationName: event.locationName,
    address: event.address,
    suburb: event.suburb,
    state: event.state,
    postcode: event.postcode,
    lat: event.lat,
    long: event.long,
    link: event.link,
  };

  return (
    <EventForm
      formId="edit-event-form"
      eventForm={eventForm}
      forNewEvent={false}
    />
  );
};

export default EditEvent;
