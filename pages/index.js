import dbConnect from "../lib/dbConnect";
// import Event from '../models/Event'
import Hero from "../components/Hero";
import EventList from "../components/EventList";
import Link from "next/link";
import { client } from "./_app";
import { gql, useQuery } from "@apollo/client";

const Index = ({ events }) => {
  return (
    <>
      <Hero />
      <EventList>
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
      </EventList>
    </>
  );
};

/* Retrieves event(s) data from mongodb database */
export async function getServerSideProps() {
  await dbConnect();

  const { data } = await client.query({
    query: gql`
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
          address
          suburb
          state
          postcode
          lat
          long
          link
          description
          createdBy
        }
      }
    `,
  });

  const events = data?.getEvents || [];

  console.log({ events });

  return { props: { events: events } };
}

export default Index;
