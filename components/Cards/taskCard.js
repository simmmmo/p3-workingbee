import {useEffect, useRef} from 'react';
import Image from 'next/image'
import taskData from '../../data/taskData'
import { CheckIcon } from '@heroicons/react/outline'



export default function TaskCard({ title, subTitle, organisationName, category, date, startTime, endTime, eventImage, locationName, suburb, description }) {

  return (
  <>
<section aria-labelledby={title}>
      <h2 className="sr-only" id={title}>
        {title}
      </h2>
  <div className="rounded-lg bg-white overflow-hidden shadow">

        <div className="p-6">
          <div className="pt-4 sm:pt-4 lg:pt-4">

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