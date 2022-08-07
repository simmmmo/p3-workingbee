import dbConnect from "../../../lib/dbConnect";
import Task from "../../../models/Task";

export default async function handler(req, res) {
  const { method } = req;

  await dbConnect();

  switch (method) {
    case "GET":
      try {
        const tasks = await Task.find(
          {}
        ); /* find all the data in our database */
        res.status(200).json({ success: true, data: tasks });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;
    case "POST":
      try {
        // const { task, ...task } = req.body

        // const newTask = await Task.create(
        //   task
        // )
        // const newTask = await Task.create(
        //   task
        // )
        const task = await Task.create(req.body);
        /* create a new model in the database */

        // console.log({ newTask })
        // console.log({ newTask })

        // Map over each task and create a task.
        // const newTask = await Task.create({ ...task, taskId: task._id });

        // console.log({ task });
        res.status(201).json({ success: true, data: task });
        // res.status(201).json({ success: true, data: { ...newTask, task: {} } })
      } catch (error) {
        res.status(400).json({ success: false, error });
      }
      break;
    default:
      res.status(400).json({ success: false });
      break;
  }
}
