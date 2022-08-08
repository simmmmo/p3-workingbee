import { useState, useEffect, useRef } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import dbConnect from "../../../lib/dbConnect";
import PageTitle from "../../../components/PageTitle";
import EventCard from "../../../components/Cards/EventCard";
import GoalCard from "../../../components/Cards/GoalCard";
import AddTaskCard from "../../../components/Cards/AddTaskCard";
import LocationCard from "../../../components/Cards/LocationCard";
import { CheckIcon } from "@heroicons/react/outline";
import { client } from "../../_app";
import { gql, useQuery } from "@apollo/client";
import { useSession, signIn, signOut } from "next-auth/react";

/* Allows you to view event card info and delete event card*/
const EventPage = ({ event, tasks, donations }) => {
  const { data: session } = useSession();

  return (
    <div key={event._id} className="min-h-full">
      <PageTitle title={event.title} />

      <main className="mt-10 pb-8">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:max-w-7xl lg:px-8">
          {/* <h1 className="sr-only">Page title</h1> */}

          <div className="grid grid-cols-1 gap-4 items-start lg:grid-cols-3 lg:gap-8">
            {/* Left column */}
            <div className="grid grid-cols-1 gap-4 lg:col-span-2">
              <EventCard
                title={event.title}
                subTitle={event.subTitle}
                organisationName={event.organisationName}
                category={event.category}
                date={event.date}
                startTime={event.startTime}
                endTime={event.endTime}
                eventImage={event.eventImage}
                description={event.description}
                locationName={event.locationName}
                suburb={event.suburb}
                postcode={event.postcode}
              >
                {donations.map((donation) => (
                  <div key={donation._id} className="relative">
                    <dd className="mt-2 ml-9 text-base text-gray-500">
                      Time donated: {donation.donationHours}
                      hrs
                    </dd>
                    <dd className="mt-2 ml-9 text-base text-gray-500">
                      Contributors: {donation.lenth}
                    </dd>
                  </div>
                ))}

                {tasks.map((task) => (
                  <div key={task._id} className="relative">
                    <dt>
                      <CheckIcon
                        className="absolute h-6 w-6 text-gray-300"
                        aria-hidden="true"
                      />
                      <p className="ml-9 text-lg leading-6 font-medium text-gray-900">
                        {task.taskTitle}
                      </p>
                    </dt>
                    <dd className="mt-2 ml-9 text-base text-gray-500">
                      {task.taskDescription}
                    </dd>
                    <dd className="mt-2 ml-9 text-base text-gray-500">
                      Estimated time needed: {task.taskGoalHours}hrs
                    </dd>
                    <dd className="mt-2 ml-9 text-base text-gray-500">
                      Time donated: hrs
                    </dd>
                    <dd className="mt-2 ml-9 text-base text-gray-500">
                      Contributors:
                    </dd>
                  </div>
                ))}
              </EventCard>
              {event.createdBy === session?.user.email ?
             ( <AddTaskCard eventId={event._id} />) : null }
             
            </div>
            {/* Right column */}
            <div className="grid grid-cols-1 gap-4">
              <GoalCard taskData={tasks} eventId={event._id} userId={session?.user.email}/>
              <LocationCard
                name={event.locationName}
                address={event.address}
                mapLink={event.link}
                mapLong={event.long}
                mapLat={event.lat}
              />
              {/* <div>  
              <Link href="/events/[id]/edit" as={`/events/${event._id}/edit`}>
              <button className="btn edit">Edit</button>
            </Link>
            <button className="btn delete" onClick={handleDelete}>
              Delete
            </button>
            </div> */}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export async function getServerSideProps({ params }) {

  await dbConnect();

  // console.log(params)
  const queryArguments = `"${params.id}"`;
  // const eventId = params.id
  // console.log({eventId})
  const { data } = await client.query({
    query: gql`
    {
      getEventById(eventId: ${queryArguments}) {
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
      getTasksByEventId(taskEventId: ${queryArguments}) {
        _id
        eventId
        taskTitle
        taskDescription
        taskGoalHours
      }
      getDonationsByEventId(donationsEventId: ${queryArguments}) {
        _id
        taskId
        userId
        donationHours
        eventId
      }
    }
  `,
  });
  console.log({ data });

  const donationByTask = data?.GetEventById || [];

  return {
    props: {
      event: data.getEventById,
      tasks: data.getTasksByEventId,
      donations: data.getDonationsByEventId,
    },
  };
}

export default EventPage;
