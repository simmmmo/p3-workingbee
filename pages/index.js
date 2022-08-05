import { useState, useEffect, useRef} from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import dbConnect from '../../../lib/dbConnect';
import Event from '../../../models/Event';
import Task from '../../../models/Task';
import Donation from '../../../models/Donation';
// import eventData from '../../../data/eventData';
import PageTitle from '../../../components/PageTitle';
import EventCard from '../../../components/Cards/EventCard';
import GoalCard from '../../../components/Cards/GoalCard';
import TaskCard from '../../../components/Cards/TaskCard';
import LocationCard from '../../../components/Cards/LocationCard';
import { CheckIcon } from '@heroicons/react/outline'

/* Allows you to view event card info and delete event card*/
const EventPage = ({ event, tasks, donations }) => {
  const router = useRouter()
  const [message, setMessage] = useState('')
  const handleDelete = async () => {
    const eventID = router.query.id

    try {
      await fetch(`/api/events/${eventID}`, {
        method: 'Delete',
      })
      router.push('/')
    } catch (error) {
      setMessage('Failed to delete the event.')
    }
  }



  return (

    <div key={event._id} className="min-h-full">
    <PageTitle title={event.title}  />

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
                
               <dd className="mt-2 ml-9 text-base text-gray-500">Time donated: {donation.donationHours}
                hrs</dd>
                <dd className="mt-2 ml-9 text-base text-gray-500">Contributors: {donation.lenth}

                </dd>
              </div>
            ))}

            {tasks.map((task) => (
              <div key={task._id} className="relative">
                <dt>
                  <CheckIcon className="absolute h-6 w-6 text-gray-300" aria-hidden="true" />
                  <p className="ml-9 text-lg leading-6 font-medium text-gray-900">{task.taskTitle}</p>
                </dt>
                <dd className="mt-2 ml-9 text-base text-gray-500">{task.taskDescription}</dd>
                <dd className="mt-2 ml-9 text-base text-gray-500">Estimated time needed: {task.taskGoalHours}hrs</dd>
                <dd className="mt-2 ml-9 text-base text-gray-500">Time donated: 
                hrs</dd>
                <dd className="mt-2 ml-9 text-base text-gray-500">Contributors: 

                </dd>
              </div>
            ))}
              </EventCard>
              <TaskCard 
                eventId={event._id}  
              />
            </div>
            {/* Right column */}
            <div className="grid grid-cols-1 gap-4">
            <GoalCard 
            taskData={tasks}
            eventId={event._id}               
            />
            <LocationCard 
              name={event.locationName} 
              address={event.address} 
              mapLink={event.link} 
              mapLong={event.long} 
              mapLat={event.lat}
            />
            <div>  
              <Link href="/events/[id]/edit" as={`/events/${event._id}/edit`}>
              <button className="btn edit">Edit</button>
            </Link>
            <button className="btn delete" onClick={handleDelete}>
              Delete
            </button>
            </div>
            </div>
          </div>
        </div>
      </main>
    </div>


  )
}

export async function getServerSideProps({ params }) {
  // 1. Call events API with params.id and get the event
  // 2. Call the tasks API with the eventId to get the tasks
  // 3. Call the GraphQL API with the taskId to get the donations
  // 4. Return event, tasks and donations as props


  await dbConnect()
  // console.log(params)
  const event = await Event.findById(params.id).lean()
  event._id = event._id.toString()

  const result = await Task.find({ eventId: params.id })

  const allDonations = await Donation.find({})

  const donationsByEvent = await Donation.find({ eventId: params.id })
  // const donationsByTask = await Donation.find({ eventId: params.id })
  // fetch('/api/events/${params.id}')

  // const result = await Task.findById(eventId.params).lean()

  const tasks = result.map((doc) => {
    const task = doc.toObject()
    task._id = task._id.toString()
    task.eventId = task.eventId.toString()
    return task
  })

  const donations = donationsByEvent.map((doc) => {
    const donation = doc.toObject()
    donation._id = donation._id.toString()
    donation.userId = donation.userId.toString()
    donation.taskId = donation.taskId.toString()
    donation.eventId = donation.eventId.toString()
    return donation
  })

  // const task = await Task.findById(params.eventId).lean()
  console.log({ donations })
  return { props: { event, tasks, donations } }
}

export default EventPage