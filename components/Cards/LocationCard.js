import {useEffect, useRef} from 'react';
import { CheckIcon } from '@heroicons/react/outline'
import Map from '../Map'

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



export default function LocationCard() {

  return (
  <>
      <section aria-labelledby="section-2-title">
                  <h2 className="sr-only" id="section-2-title">
                    Section title
                  </h2>
                  <div className="rounded-lg bg-white overflow-hidden shadow">
                  <Map long="145.1011334" lat="-37.8252943"/>

                    <div className="p-6">
                   
                  <h3 className="font-medium text-gray-900">Location Name</h3>
                  <p className="mt-1 text-sm text-gray-600 line-clamp-2">
                        Address goes here
                    </p>
                    <div className="mt-6">
                  <a
                    href="#"
                    className="w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
                  >View on Google Maps
                  </a>
              </div>
            </div>
          </div>
        </section>

</>
  )
}