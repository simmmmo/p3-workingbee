// components/Countries.js

import { useQuery, gql } from "@apollo/client";
import styles from "../styles/Home.module.css";

const QUERY = gql`
query GetEvents {
  getEvents {
    _id
    title
    subTitle
    organisationName
    category
    date
    startTime
    endTime
    eventImage
    locationName
    state
    postcode
    description
    createdBy
  }
}
`;




export default function Countries() {
  const { data, loading, error } = useQuery(QUERY);

  if (loading) {
    return <h2><a href="#loading" aria-hidden="true" className="aal_anchor" id="loading"><svg aria-hidden="true" className="aal_svg" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fillRule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Loading...</h2>;
  }

  if (error) {
    console.error(error);
    return null;
  }

  const events = data.getEvents.slice(0, 4);

  return (
    <>
    {events.map((event) => (
      <div
        key={event._id}
        className="flex flex-col rounded-lg shadow-lg overflow-hidden"
      >
        <div className="flex-shrink-0">
          <img
            className="h-48 w-full object-cover"
            src={event.eventImage}
            alt=""
          />
        </div>
        <div className="flex-1 bg-white p-6 flex flex-col justify-between">
          <div className="flex-1">
            <p className="text-sm font-medium text-amber-500">
            {event.date}
            </p>
            <a href={"/events/" + event._id} className="block mt-2">
              <p className="text-xl font-semibold text-gray-900">
                {event.title}
              </p>
              <p className="mt-3 text-base text-gray-500 max-w-prose ...">
                {event.description}
              </p>
            </a>
          </div>
          <div className="mt-6">
          <a href={"/events/" + event._id} className="block mt-2">
             <div>
            <p className="text-sm font-medium text-amber-500">
              {event.category}
            </p>
            </div>
            <div className="ml">
              <p className="text-sm font-medium text-gray-900">
                {event.locationName}
              </p>
             <div className="flex space-x-1 text-sm text-gray-500">
                <span>{event.startTime}</span>
                <span aria-hidden="true"> - </span>
                <span>{event.endTime}</span>
              </div>
            </div>
            </a>
          </div>
        </div>
      </div>
    ))}
</>
  );
}