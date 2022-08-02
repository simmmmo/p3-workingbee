import {useEffect, useRef} from 'react';

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



export default function GoalCard() {
  

  return (
  <>
   <section aria-labelledby="section-2-title">
                <div className="rounded-lg bg-white overflow-hidden shadow">
                <div className="flex bg-gray-50 flex-col border-b border-gray-100 p-6 text-center sm:border-0 sm:border-r">
                  <dt className="order-2 mt-2 text-lg leading-6 font-medium text-gray-500">Goal Progress</dt>
                  <dd className="order-1 text-5xl font-extrabold text-indigo-600">100%</dd>
                </div>
                    <div className="p-6">
                  <div>
                  <h3 className="font-medium text-gray-900">Task Progress</h3>
                  <dl className="mt-2 border-t border-b border-gray-200 divide-y divide-gray-200">
                  {tasks.map((task) => (
                      <div key={task.title} className="py-3 flex justify-between text-sm font-medium">
                        <dt className="text-gray-500">{task.title}</dt>
                        <dd className="text-gray-900">{task.donationed} of {task.goalHours} Hours</dd>
                      </div>
                    ))}
                  </dl>
                </div>
                <div className="flow-root mt-6">
                  <h3 className="font-medium text-gray-900">Get Involved</h3>
                    <p className="mt-1 text-sm text-gray-600 line-clamp-2">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc non sagittis nulla, eu luctus augue. Cras enim metus, cursus et mauris id, ultrices sodales sapien. 
                    </p>
                </div>
                  <div className="flow-root mt-6">
                    <div>
                      <form action="#" method="POST" className="space-y-6">
                    <div>
                  <label htmlFor="taskContributeTitle" className="block text-sm font-medium text-gray-700">
                        Task
                    </label>
      <select
        id="taskContributeTitle"
        name="taskContributeTitle"
        className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
      >
        {tasks.map((task) => (
        <option key={task.title}>{task.title}</option>
        ))}
      </select>
                  </div>

                  <div>
                  <label htmlFor="taskContributeTitle" className="block text-sm font-medium text-gray-700">
        Donate Hours
      </label>
      <select
        id="taskContributeHours"
        name="taskContributeHours"
        className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
      >
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
            <option>6</option>
            <option>7</option>
      </select>
                  </div>

                 

                  <div>
                    <button
                      type="submit"
                      className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                      Get Involved
                    </button>
                  </div>
                </form>
               </div>
              </div>
              <div className="mt-6">
                  <a
                    href="#"
                    className="w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
                  >Sign in to contributor
                  </a>
              </div>
            </div>
          </div>
        </section>

</>
  )
}