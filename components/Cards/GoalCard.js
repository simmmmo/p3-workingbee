import React, { useCallback, useState, useEffect, useRef } from 'react';
// import taskData from '../../data/taskData'
import Select from '../Form/Select';
import Form from '../Form/Form';
import DonationForm from '../DonationForm';

export default function GoalCard({taskData, eventId}) {
  
  const donationForm = {
    taskId: '',
    userId: '',
    donationHours: '',
    eventId: eventId,
  }

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
                  {taskData.map((task) => (
                      <div key={task._id} className="py-3 flex justify-between text-sm font-medium">
                        <dt className="text-gray-500">{task.taskTitle}</dt>
                        <dd className="text-gray-900">0 of {task.taskGoalHours} Hours</dd>
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
                    <DonationForm formId="add-donation-form" taskData={taskData} donationForm={donationForm}/>
                    {/* <Form action="#" method="POST">
                    <Select 
                        type="text" 
                        name="taskContributeTitle" 
                        label="Task" 
                        onChange={handleChange} 
                        value={form.taskContributeTitle} 
                        width="sm:col-span-6"
                      >
                       {taskData.map((task) => (
                         <option key={task._id} value={task._id}>{task.taskTitle}</option>
                        ))}
                    </Select>
                    <Select 
                      type="text" 
                      name="taskContributeHours" 
                      label="Donate Hours" 
                      onChange={handleChange} 
                      value={form.taskContributeHours} 
                      width="sm:col-span-6"
                    >
                      {[1,2,3,4,5,6,7,8,9].map((number) => (
                      <option key={number} value={number}>{number}</option>
                    ))}
                    </Select>
                  <div>
                    <button
                      type="submit"
                      className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                      Get Involved
                    </button>
                  </div>
                  </Form> */}
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