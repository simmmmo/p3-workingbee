import dbConnect from '../lib/dbConnect'
// import Event from '../models/Event'
import Hero from '../components/Hero';
import EventList from '../components/EventList';
import Link from 'next/link'
import { client } from './_app';
import { gql, useQuery } from '@apollo/client';

const Index = ({ events }) => {
  
   return (

  <>
  <Hero />
    <EventList>
      {events.map((event) => (
              <div key={event._id} className='flex flex-col rounded-lg shadow-lg overflow-hidden'>
                <div className='flex-shrink-0'>
                  <img className='h-48 w-full object-cover' src={event.eventImage} alt='' />
                </div>
                <div className='flex-1 bg-white p-6 flex flex-col justify-between'>
                  <div className='flex-1'>
                    <p className='text-sm font-medium text-indigo-600'>
                      <a href={event.category} className='hover:underline'>
                        {event.category}
                      </a>
                    </p>
                    <a href={event._id} className='block mt-2'>
                      <p className='text-xl font-semibold text-gray-900'>{event.title}</p>
                      <p className='mt-3 text-base text-gray-500 max-w-prose ...'>{event.description}</p>
                    </a>
                  </div>
                  <div className='mt-6 flex items-center'>
                    <div className='flex-shrink-0'>
                      <a href={event._id}>
                        <span className='sr-only'>{event.organisationName}</span>
                        <img className='h-10 w-10 rounded-full' src="#" alt='' />
                      </a>
                    </div>
                    <div className='ml-3'>
                    <Link href="/events/[id]" as={`/events/${event._id}`}>
                      <p className='text-sm font-medium text-gray-900'>
                        View
                        {/* <a href={event._id} className='hover:underline'>
                          {event._id}
                        </a> */}
                      </p>
                      </Link>
                      <div className='flex space-x-1 text-sm text-gray-500'>
                        <time dateTime={event.date}>{event.date}</time>
                        <span aria-hidden='true'>&middot;</span>
                        <span>{event.startTime}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
      </EventList>
  </>
  )
}

/* Retrieves event(s) data from mongodb database */
export async function getServerSideProps() {
  await dbConnect()
  
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
  })

  const events = data?.getEvents || [];

  console.log({events})
  /* find all the data in our database */
  // const result = await Event.find({})
  // const events = result.map((doc) => {
  //   const event = doc.toObject()
  //   event._id = event._id.toString()
  //   return event
  // })

  return { props: { events: events } }
}

export default Index
