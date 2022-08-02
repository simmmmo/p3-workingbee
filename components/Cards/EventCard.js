import {useEffect, useRef} from 'react';
import Image from 'next/image'

import { CheckIcon } from '@heroicons/react/outline'


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

const currentFile = {
  name: 'IMG_4985.HEIC',
  size: '3.9 MB',
  source:
    'https://images.unsplash.com/photo-1582053433976-25c00369fc93?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=512&q=80',
  information: {
    'Uploaded by': 'Marie Culver',
    Created: 'June 8, 2020',
    'Last modified': 'June 8, 2020',
    Dimensions: '4032 x 3024',
    Resolution: '72 x 72',
  },
  sharedWith: [
    {
      id: 1,
      name: 'Aimee Douglas',
      imageUrl:
        'https://images.unsplash.com/photo-1502685104226-ee32379fefbe?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=3&w=1024&h=1024&q=80',
    },
    {
      id: 2,
      name: 'Andrea McMillan',
      imageUrl:
        'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixqx=oilqXxSqey&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
  ],
}


export default function EventCard() {
  

  return (
  <>


<section aria-labelledby="section-1-title">
      <h2 className="sr-only" id="section-1-title">
        Section title
      </h2>
  <div className="rounded-lg bg-white overflow-hidden shadow">
    {/* <Image imageUrl="https://s3.ap-southeast-2.amazonaws.com/testenv.com.au/bootcamp/working-bee/working-bee-gardening-placeholder.jpg"  alt=""/> */}
          <img
          src='https://s3.ap-southeast-2.amazonaws.com/testenv.com.au/bootcamp/working-bee/working-bee-gardening-placeholder.jpg'
          alt=""
          className="w-full h-full object-center object-cover"
        />
          {/* <Image
            className="w-full h-full object-center object-cover"        
            src='https://s3.ap-southeast-2.amazonaws.com/testenv.com.au/bootcamp/working-bee/working-bee-gardening-placeholder.jpg'
            alt=""
            priority
            sizes="(min-width: 1024px) 67.8125rem, (min-width: 640px) 100vw, 45rem"
          /> */}
        <div className="p-6">
          <div className="pt-4 sm:pt-4 lg:pt-4">
            <div className="px-4 py-5 sm:px-6">
              <h3 className="text-2xl text-gray-900 font-extrabold tracking-tight sm:text-3xl">
              Event Subtitle
              </h3>
            </div>

          <div className="border-t border-gray-200 px-4 py-5 sm:px-6">
            <dl className="grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2">
              <div className="sm:col-span-1">
                <dt className="text-sm font-medium text-gray-500">Location</dt>
                <dd className="mt-1 text-sm text-gray-900">Surrey Hills Primary</dd>
              </div>
              <div className="sm:col-span-1">
                <dt className="text-sm font-medium text-gray-500">Suburb</dt>
                <dd className="mt-1 text-sm text-gray-900">Surrey Hills</dd>
              </div>
              <div className="sm:col-span-1">
                <dt className="text-sm font-medium text-gray-500">Date</dt>
                <dd className="mt-1 text-sm text-gray-900"><time dateTime="2022-08-25">August 25, 2022</time></dd>
              </div>
              <div className="sm:col-span-1">
                <dt className="text-sm font-medium text-gray-500">Time</dt>
                <dd className="mt-1 text-sm text-gray-900">10:00am - 6:00pm</dd>
              </div>
            </dl>
            <div className="mt-6 text-gray-500 space-y-6">
            <p className="text-lg">
              Sagittis scelerisque nulla cursus in enim consectetur quam. Dictum urna sed consectetur neque tristique
              pellentesque. Blandit amet, sed aenean erat arcu morbi. Cursus faucibus nunc nisl netus morbi vel
              porttitor vitae ut. Amet vitae fames senectus vitae.
            </p>
            <p className="text-base leading-7">
              Sollicitudin tristique eros erat odio sed vitae, consequat turpis elementum. Lorem nibh vel, eget
              pretium arcu vitae. Eros eu viverra donec ut volutpat donec laoreet quam urna. Sollicitudin tristique
              eros erat odio sed vitae, consequat turpis elementum. Lorem nibh vel, eget pretium arcu vitae. Eros eu
              viverra donec ut volutpat donec laoreet quam urna.
            </p>
            <p className="text-base leading-7">
              Rhoncus nisl, libero egestas diam fermentum dui. At quis tincidunt vel ultricies. Vulputate aliquet
              velit faucibus semper. Pellentesque in venenatis vestibulum consectetur nibh id. In id ut tempus
              egestas. Enim sit aliquam nec, a. Morbi enim fermentum lacus in. Viverra.
            </p>
            </div>
         </div>
          <div className="border-t border-gray-200 px-4 py-5 sm:px-6">
            <h3 className="text-2xl text-gray-900 font-extrabold tracking-tight sm:text-1xl">
            Tasks
            </h3>
          <div className="mt-12 lg:mt-0">
            <dl className="space-y-10 sm:space-y-0 sm:grid l sm:gap-x-6 sm:gap-y-10 lg:gap-x-8">
            {tasks.map((task) => (
              <div key={task.title} className="relative">
                <dt>
                  <CheckIcon className="absolute h-6 w-6 text-gray-300" aria-hidden="true" />
                  <p className="ml-9 text-lg leading-6 font-medium text-gray-900">{task.title}</p>
                </dt>
                <dd className="mt-2 ml-9 text-base text-gray-500">{task.description}</dd>
                <dd className="mt-2 ml-9 text-base text-gray-500">Estimated time needed: {task.goalHours}hrs</dd>
                <dd className="mt-2 ml-9 text-base text-gray-500">Time donated: {task.donationed}hrs</dd>
                <dd className="mt-2 ml-9 text-base text-gray-500">Contributors: {task.contributors}</dd>
              </div>
            ))}
            </dl>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

</>
  )
}