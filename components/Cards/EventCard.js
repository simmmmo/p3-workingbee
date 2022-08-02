import {useEffect, useRef} from 'react';
import Image from 'next/image'
import taskData from '../../data/taskData'
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





export default function EventCard({ title, subTitle, organisation, category, date, startTime, endTime, image,  locationName, locationSuburb, locationPostcode, description }) {
  

  return (
  <>


<section aria-labelledby={title}>
      <h2 className="sr-only" id={title}>
        {title}
      </h2>
  <div className="rounded-lg bg-white overflow-hidden shadow">
          <img
          src={image}
          alt={title}
          className="w-full h-full object-center object-cover"
        />
        <div className="p-6">
          <div className="pt-4 sm:pt-4 lg:pt-4">
            <div className="px-4 py-5 sm:px-6">
              <h3 className="text-2xl text-gray-900 font-extrabold tracking-tight sm:text-3xl">
              {subTitle}
              </h3>
            </div>
              <div className="border-t border-gray-200 px-4 py-5 sm:px-6">
                <dl className="grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-3">
                <div className="sm:col-span-1">
                    <dt className="text-sm font-medium text-gray-500">Date</dt>
                    <dd className="mt-1 text-sm text-gray-900"><time dateTime={date}>August 25, 2022</time></dd>
                  </div>
                  <div className="sm:col-span-1">
                    <dt className="text-sm font-medium text-gray-500">Time</dt>
                    <dd className="mt-1 text-sm text-gray-900">{startTime} - {endTime}</dd>
                  </div>
                <div className="sm:col-span-1">
                    <dt className="text-sm font-medium text-gray-500">Category</dt>
                    <dd className="mt-1 text-sm text-gray-900">{category}</dd>
                  </div>
                  <div className="sm:col-span-1">
                    <dt className="text-sm font-medium text-gray-500">Location</dt>
                    <dd className="mt-1 text-sm text-gray-900">{locationName}</dd>
                  </div>
                  <div className="sm:col-span-1">
                    <dt className="text-sm font-medium text-gray-500">Suburb</dt>
                    <dd className="mt-1 text-sm text-gray-900">{locationSuburb}</dd>
                  </div>
                  <div className="sm:col-span-1">
                    <dt className="text-sm font-medium text-gray-500">Organisation</dt>
                    <dd className="mt-1 text-sm text-gray-900">{organisation}</dd>
                  </div>
                </dl>
            <div className="mt-6 text-gray-500 space-y-6">
              <p className="text-base leading-7">
                {description}
              </p>
            </div>
         </div>
          <div className="border-t border-gray-200 px-4 py-5 sm:px-6">
            <h3 className="text-2xl text-gray-900 font-extrabold tracking-tight sm:text-1xl">
            Tasks
            </h3>
          <div className="mt-12 lg:mt-0">
            <dl className="space-y-10 sm:space-y-0 sm:grid l sm:gap-x-6 sm:gap-y-10 lg:gap-x-8">
            {taskData.map((task) => (
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