import dbConnect from "../lib/dbConnect";
// import Event from '../models/Event';
import Hero from "../components/Hero";
import HomeList from "../components/HomeList";
import ClientOnly from "../components/ClientOnly";
import HomeTiles from "../components/HomeTiles";
import Link from "next/link";
import { client } from "./_app";
import { gql, useQuery } from "@apollo/client";
import { CalendarIcon, LocationMarkerIcon, ClockIcon } from '@heroicons/react/outline'

const pageContent = {
  page: "Get Involved",
  title: "Latest Community Events",
  intro:
    "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa libero labore natus atque, ducimus sed.",
};


const Index = ({ events }) => {

  return (
    <>
      <Hero />
      <ClientOnly>
          <HomeList pageContent={pageContent}>
            <HomeTiles />
          </HomeList>
        </ClientOnly>
      {/* <EventList>
      {events.map((event) => (
      <div
        key={event._id}
        className="flex flex-col rounded-lg shadow-lg overflow-hidden"
      >
        <a href={"/events/" + event._id}>
        <div className="flex-shrink-0 sm:relative">
          <img
            className="h-48 w-full object-cover"
            src={event.eventImage}
            alt=""
          />
           <div className="p-6 flex items-end sm:absolute sm:inset-0">
              <div>
              <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-amber-500 text-white">
                  {event.category}
              </span>
              </div>
            </div>
        </div>
        <div className="flex-1 bg-white p-6 flex flex-col justify-between divide-y divide-gray-200">
          <div className="flex-1">
              <p className="text-xl font-semibold text-gray-900">
                {event.title}
              </p>
              <p className="mt-3 text-base text-gray-500 line-clamp-4">
                {event.description}
              </p>
          </div>
          <div className="mt-6">
          <div className="space-y-5 mt-6">
            <div className="flex items-center space-x-2">
              <LocationMarkerIcon className="h-5 w-5 text-amber-500" aria-hidden="true" />
                <div className="flex space-x-1 text-sm text-gray-900">
                  <span className="text-sm font-medium">{event.locationName} </span>
                  <span aria-hidden="true"> - </span>
                  <span className="text-sm font-medium text-gray-500">{event.suburb} </span>
                </div>
               </div>
            <div className="flex space-x-5 text-sm text-gray-500">
              <div className="flex items-center space-x-2">
                <CalendarIcon className="h-5 w-5 text-amber-500" aria-hidden="true" />
                <span className="text-gray-900 text-sm font-medium">{event.date}</span>
              </div>
              <div className="flex items-center space-x-2">
                <ClockIcon className="h-5 w-5 text-amber-500" aria-hidden="true" />
                <span className="text-gray-900 text-sm font-medium">{event.startTime} - {event.endTime}</span>
              </div>
            </div>
          </div>
          </div>
        </div>
        </a>
      </div>
    ))}
      </EventList> */}
    </>
  );
};

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
          state
          suburb
          postcode
          description
          createdBy
        }
      }
    `,
  }
  );

  const events = data?.getEvents || [];

  // console.log({ events });

  return { props: { events: events } };
}

export default Index;
