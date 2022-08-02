import PageTitle from '../components/PageTitle';
import {useEffect, useRef} from 'react';
import eventData from '../data/eventData'
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


export default function EventSingle() {
  
  return (
  <>
  
    <div className="min-h-full">
      <PageTitle title={eventData.title}  />
        <main className="mt-10 pb-8">
      
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:max-w-7xl lg:px-8">
            {/* <h1 className="sr-only">Page title</h1> */}

            <div className="grid grid-cols-1 gap-4 items-start lg:grid-cols-3 lg:gap-8">
              {/* Left column */}
              <div className="grid grid-cols-1 gap-4 lg:col-span-2">
                <EventCard
                  title={eventData.title}  
                  subTitle={eventData.subTitle}  
                  organisation={eventData.organisation} 
                  category={eventData.category}  
                  date={eventData.date}  
                  startTime={eventData.startTime}  
                  endTime={eventData.endTime}  
                  image={eventData.image}  
                  description={eventData.description}
                  locationName={eventData.location.name} 
                  locationSuburb={eventData.location.suburb} 
                  locationPostcode={eventData.location.postcode}               
                />
              </div>
              {/* Right column */}
              <div className="grid grid-cols-1 gap-4">
              <GoalCard/>
              <LocationCard 
                name={eventData.location.name} 
                address={eventData.location.address} 
                mapLink={eventData.location.link} 
                mapLong={eventData.location.long} 
                mapLat={eventData.location.lat}
              />
              </div>
            </div>
          </div>
        </main>
      </div>
  </>
  )
}
