import dbConnect from '../../../lib/dbConnect'
import User from '../../../models/User'

export default async function handler(req, res) {
  const { method } = req

  await dbConnect()

  switch (method) {
    case 'GET':
      try {
        const users = await User.find({}) /* find all the data in our database */
        res.status(200).json({ success: true, data: users })
      } catch (error) {
        res.status(400).json({ success: false })
      }
      break
    case 'POST':
      try {
        // const { user, ...user } = req.body

        // const newUser = await User.create(
        //   user
        // ) 
        // const newUser = await User.create(
        //   user 
        // ) 
        const user = await User.create(
          req.body
        )
        /* create a new model in the database */

        // console.log({ newUser })
        // console.log({ newUser })

        // Map over each user and create a user.
        // const newUser = await User.create({ ...user, userId: user._id });

        // console.log({ user });
        res.status(201).json({ success: true, data: user })
        // res.status(201).json({ success: true, data: { ...newUser, user: {} } })
      } catch (error) {
        res.status(400).json({ success: false, error })
      }
      break
    default:
      res.status(400).json({ success: false })
      break
  }
}
