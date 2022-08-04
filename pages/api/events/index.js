import dbConnect from '../../../lib/dbConnect'
import Event from '../../../models/Event'
import Task from '../../../models/Task'

export default async function handler(req, res) {
  const { method } = req

  await dbConnect()

  switch (method) {
    case 'GET':
      try {
        const events = await Event.find({}) /* find all the data in our database */
        res.status(200).json({ success: true, data: events })
      } catch (error) {
        res.status(400).json({ success: false })
      }
      break
    case 'POST':
      try {
        const { task, ...event } = req.body
        // Create event
        const newEvent = await Event.create(
          event
        ) 
        const newTask = await Task.create(
          task 
        ) 
        
        /* create a new model in the database */

        console.log({ newEvent })
        console.log({ newTask })

        // Map over each task and create a task.
        // const newTask = await Task.create({ ...task, eventId: event._id });

        console.log({ task });
       
        res.status(201).json({ success: true, data: { ...newEvent, task: {} } })
      } catch (error) {
        res.status(400).json({ success: false, error })
      }
      break
    default:
      res.status(400).json({ success: false })
      break
  }
}
