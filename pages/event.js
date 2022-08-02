import PageTitle from '../components/PageTitle';
import {useEffect, useRef} from 'react';
// import eventData from '../data/eventData'
import { CheckIcon } from '@heroicons/react/outline'
// import Map from '../components/Map'
import EventCard from '../components/Cards/EventCard';
import GoalCard from '../components/Cards/GoalCard';
import LocationCard from '../components/Cards/LocationCard';


const tasks = [
  {
    title: 'Digging Veggie Patch',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc non sagittis nulla, eu luctus augue. Cras enim metus, cursus et mauris id, ultrices sodales sapien. Donec viverra enim et rhoncus feugiat. Duis non rhoncus ante. Ut nulla lectus, tristique ut metus id, feugiat gravida ex. Integer a dui a metus sollicitudin mattis. Aenean placerat, nisl vel volutpat fermentum, tellus odio suscipit est, vel imperdiet diam est non turpis.',
    goalHours: 6,
    donationed: 2,
    contributors: 2,
  },
  {
    title: 'Painting School Front Gate',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc non sagittis nulla, eu luctus augue. Cras enim metus, cursus et mauris id, ultrices sodales sapien. Donec viverra enim et rhoncus feugiat. Duis non rhoncus ante. Ut nulla lectus, tristique ut metus id, feugiat gravida ex. Integer a dui a metus sollicitudin mattis. Aenean placerat, nisl vel volutpat fermentum, tellus odio suscipit est, vel imperdiet diam est non turpis.',
    goalHours: 3,
    donationed: 1,
    contributors: 1,
  },
  {
    title: 'Repair Fence',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc non sagittis nulla, eu luctus augue. Cras enim metus, cursus et mauris id, ultrices sodales sapien. Donec viverra enim et rhoncus feugiat. Duis non rhoncus ante. Ut nulla lectus, tristique ut metus id, feugiat gravida ex. Integer a dui a metus sollicitudin mattis. Aenean placerat, nisl vel volutpat fermentum, tellus odio suscipit est, vel imperdiet diam est non turpis.',
    goalHours: 10,
    donationed: 4,
    contributors: 4,
  },
]

const currentEvent = {
    "id": 1,
    "title": "Primary School WorkingBee",
    "subTitle": "Grounds clean up",
    "category": "Education",
    "date": "2022-10-10",
    "startTime": "10:00 AM",
    "endTime": "10:00 PM",
    "image": "#",
    "location": [{
      "name": "Surrey Hills Primary School",
      "address": "Surrey Hills Primary School",
      "address1": "2 Beatrice Ave, Surrey Hills VIC, 3127",
      "address2": "",
      "address3": "",
      "suburb": "Surrey Hills",
      "postcode": 3127,
      "country": "Australia",
      "long": "-37.824955317637574",
      "lat": ", 145.1012406883542",
      "link": "https://goo.gl/maps/eCTYtaLBmD9xPGPn6",
    }],
    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque in auctor dui. Cras nulla nulla, aliquet et neque at, pellentesque feugiat risus. Mauris auctor leo sed leo posuere elementum. Curabitur et cursus est. Praesent accumsan, neque eu sagittis sagittis, nisi nisl varius justo, vel molestie est ligula quis nibh. Suspendisse non ligula mi. Donec a scelerisque sapien. Vivamus consectetur et quam et imperdiet.",
    "createdBy": 1
  }




export default function EventSingle() {
  

  return (
  <>
  
    <div className="min-h-full">
    <PageTitle/>
        <main className="mt-10 pb-8">
      
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:max-w-7xl lg:px-8">
            {/* <h1 className="sr-only">Page title</h1> */}
           
            Main 3 column grid
            <div className="grid grid-cols-1 gap-4 items-start lg:grid-cols-3 lg:gap-8">
              {/* Left column */}
              <div className="grid grid-cols-1 gap-4 lg:col-span-2">
              <EventCard/>
              </div>
              {/* Right column */}
              <div className="grid grid-cols-1 gap-4">
              <GoalCard/>
              <LocationCard/>
              </div>
            </div>
          </div>
        </main>
      </div>
  </>
  )
}
