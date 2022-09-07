import { useState, useEffect, useRef } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import dbConnect from "../../../lib/dbConnect";
import PageTitle from "../../../components/PageTitle";
import EventCard from "../../../components/Cards/EventCard";
import GoalCard from "../../../components/Cards/GoalCard";
import AddTaskCard from "../../../components/Cards/AddTaskCard";
import LocationCard from "../../../components/Cards/LocationCard";
import { CheckIcon, EmojiHappyIcon } from "@heroicons/react/outline";
import { client } from "../../_app";
import { gql, useQuery } from "@apollo/client";
import { useSession, signIn, signOut } from "next-auth/react";

/* Allows you to view event card info and delete event card*/
const EventPage = ({ event, tasks, donations, queryArguments }) => {

  const { data: session } = useSession();

// this will create an array of all donations hours, i.e. [3, 3, 1]
// const donationHoursArray = donations.map((donation) => donation.donationHours);

const donationHoursArray = donations.map((donation) => {
  if (donation?.donationHours) {
    return donation.donationHours  
  }
  return 0
});
console.log({donationHoursArray})
// const taskHoursArray = tasks.map((task) => task.taskGoalHours);

const taskHoursArray = tasks.map((task) => {
  if (task?.taskGoalHours) {
    return task.taskGoalHours  
  }
  return 0
});
console.log({taskHoursArray})

// we will pass this function into the reduce function
function addHours(acc, value) {
  return acc + value
};

// this will give us the sum of the donation hours array
const sumOfDonationHours = donationHoursArray.reduce(addHours, 0);
console.log({sumOfDonationHours})
const sumOfTaskHours = taskHoursArray.reduce(addHours, 0);
console.log({sumOfTaskHours})
const eventPercentage = Math.round((100 * sumOfDonationHours) / sumOfTaskHours);
console.log({eventPercentage})

  return (
    <div key={event._id} className="min-h-full">
      <PageTitle title={event.title} />

      <main className="mt-10 pb-8">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:max-w-7xl lg:px-8">
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
         <div className="border-t border-gray-200 px-4 py-5 sm:px-6">
              <h3 className="text-2xl text-gray-900 font-extrabold tracking-tight sm:text-1xl">
                Tasks
              </h3>
          <div className="mt-12 lg:mt-4">
            <dl className="space-y-10 sm:space-y-0 sm:grid l sm:gap-x-6 sm:gap-y-10 lg:gap-x-8">
                {tasks.map((task) => {
                  const taskDonationHours = donations.map((donation) => {
                    if (donation.taskId === task._id) {
                      return donation.donationHours
                    }
                    return 0
                  })
                const sumOfTaskDonationHours = taskDonationHours.reduce(addHours, 0);
                console.log({taskDonationHours})
                  return (<div key={task._id} className="relative">
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
                    Time donated: {sumOfTaskDonationHours}hrs
                  </dd>
                  {/* <dd className="mt-2 ml-9 text-base text-gray-500">
                    Contributors:
                  </dd> */}
                  </div> )
                } 
                )}
                 </dl>
                </div>
              </div>
              {/* <TaskList queryArguments={queryArguments}></TaskList> */}
                <div className="border-t border-gray-200 px-4 py-5 sm:px-6">
                  <h3 className="text-2xl text-gray-900 font-extrabold tracking-tight sm:text-1xl">
                  Contributors:
                  </h3>
                  <div className="mt-12 lg:mt-4">
                  <dl className="space-y-10 sm:space-y-0 sm:grid l sm:gap-x-6 sm:gap-y-10 lg:gap-x-8">
                  {donations.map((donation) => (
                  <div key={donation._id} className="relative">
                    <dt>
                      <EmojiHappyIcon
                        className="absolute h-6 w-6 text-green-600"
                        aria-hidden="true"
                      />
                      <p className="ml-9 text-lg leading-6 font-medium text-gray-900">
                      Time donated: {donation.donationHours} hrs by a local volunteer
                      {/* {donation.userId} */}
                      </p>
                    </dt>
                    </div>
                  ))}
                  </dl>
                </div>
              </div>
              </EventCard>
              {event.createdBy === session?.user.email ?
             (<AddTaskCard eventId={event._id} />) : null }
            </div>
            {/* Right column */}
            <div className="grid grid-cols-1 gap-4">
              <GoalCard taskData={tasks} donationData={donations} eventId={event._id} userId={session?.user.email} eventPercentage={eventPercentage}/>
              <LocationCard
                name={event.locationName}
                address={event.address}
                mapLink={event.link}
                mapLong={event.long}
                mapLat={event.lat}
              />
               {/* {event.createdBy === session?.user.email ?
              (<div>  
              <Link href="/events/[id]/edit" as={`/events/${event._id}/edit`}>
              <button className="w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-500 hover:bg-gray-50">Edit</button>
              </Link>
              <button className="w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-500 hover:bg-gray-50" onClick={handleDelete}>
              Delete
              </button>
              </div>
              ) : null } */}
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
  fetchPolicy: 'no-cache',
  });
  
  return {
    props: {
      event: data.getEventById,
      tasks: data.getTasksByEventId,
      donations: data.getDonationsByEventId,
      queryArguments: queryArguments
    },
  };
}

export default EventPage;