import React, { useCallback, useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/router'
import { mutate } from 'swr'

import Input from './Form/Input';
import Select from './Form/Select';
import TextArea from './Form/TextArea';
import Form from './Form/Form';
import FieldContainer from './Form/Container';



const DonationForm = ({ taskData, eventId, formId, donationForm, forNewDonation = true }) => {

    const router = useRouter()
    const contentType = 'application/json'
    const [errors, setErrors] = useState({})
    const [message, setMessage] = useState('')
    
    const [form, setForm] = useState({
      taskId: donationForm.taskId,
      userId: donationForm.userId,
      donationHours: donationForm.donationHours,
      eventId: donationForm.eventId,
    })
  
    /* The PUT method edits an existing entry in the mongodb database. */
    const putData = async (form) => {
      const { id } = router.query
  
      try {
        const res = await fetch(`/api/donations/${id}`, {
          method: 'PUT',
          headers: {
            Accept: contentType,
            'Content-Type': contentType,
          },
          body: JSON.stringify(form),
        })
  
        // Throw error with status code in case Fetch API req failed
        if (!res.ok) {
          throw new Error(res.status)
        }
  
        const { data } = await res.json()
  
        mutate(`/api/donations/${id}`, data, false) // Update the local data without a revalidation
        router.push('/')
      } catch (error) {
        setMessage('Failed to update donation')
      }
    }
  
    /* The POST method adds a new entry in the mongodb database. */
    const postData = async (form) => {
      try {
        const res = await fetch('/api/donations', {
          method: 'POST',
          headers: {
            Accept: contentType,
            'Content-Type': contentType,
          },
          body: JSON.stringify(form),
        })
  
        // Throw error with status code in case Fetch API req failed
        if (!res.ok) {
          throw new Error(res.status)
        }
  
        router.push('/')
      } catch (error) {
        setMessage('Failed to add donation')
      }
    }
  
    const handleChange = (e) => {
      const target = e.target
      const value = target.value
      const name = target.name
  
      setForm({
        ...form,
        [name]: value,
      })
    }
  
    const handleSubmit = (e) => {
      e.preventDefault()
      const errs = formValidate()
      if (Object.keys(errs).length === 0) {
        forNewDonation ? postData(form) : putData(form)
      } else {
        setErrors({ errs })
      }
    }
  
    /* Makes sure donation info is filled for donation name, owner name, species, and image url*/
    const formValidate = () => {
      let err = {}
      return err
    }

  return (
    <>
    <Form id={formId} onSubmit={handleSubmit}>
    {/* <Input 
                type="text" 
                name="taskId" 
                label="Task Id" 
                onChange={handleChange} 
                value={form.taskId} 
                width="sm:col-span-6"
              />
              */}
                  <Select 
                    type="text" 
                    name="taskId" 
                    label="Task" 
                    onChange={handleChange} 
                    value={form.taskId} 
                    width="sm:col-span-6"
                    defaultValue=""
                  >
                    <option value="" disabled>Please select a task</option>
                    {taskData.map((task) => (
                      <option key={task._id} value={task._id}>{task.taskTitle}</option>
                    ))}
                </Select>
                <Select 
                  type="text" 
                  name="donationHours" 
                  label="Donate Hours" 
                  onChange={handleChange} 
                  value={form.donationHours} 
                  width="sm:col-span-6"
                  defaultValue=""
                >
                  <option value="" disabled>Please select donation hours</option>
                  {[1,2,3,4,5,6,7,8,9].map((number) => (
                  <option key={number} value={number}>{number}</option>
                ))}
                </Select>
                <Input 
                type="text" 
                name="userId" 
                label="User Id" 
                onChange={handleChange} 
                value={form.userId} 
                width="sm:col-span-6"
              />
                       <Input 
                type="text" 
                name="eventId" 
                label="Event Id" 
                onChange={handleChange} 
                value={form.eventId} 
                width="sm:col-span-6"
              />
              <div>
                <button
                  type="submit"
                  className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  Get Involved
                </button>
              </div>
              </Form>
          <p>{message}</p>
          <div>
              {Object.keys(errors).map((err, index) => (
                <li key={index}>{err}</li>
              ))}
            </div>
    </>
  )
}

export default DonationForm;