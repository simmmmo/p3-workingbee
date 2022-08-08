// const { Donation } = require('../models');
import Donation from "../models/Donation";
import Event from "../models/Event";
import Task from "../models/Task";
import User from "../models/User";
// const resolvers = {
//   Query: {
//     getEvents: async () => {
//       try {
//         const events = await Event.find({});

//         return events
//       } catch (err) {
//         console.log(err)
//       }
//     },
//   },

//   Mutation: {
//     newEvent: async (_, { input }) => {
//       try {
//         const event = new Event(input)

//         const result = await event.save()

//         return result
//       } catch (err) {
//         console.log(err)
//       }
//     },
//   },
// }

// Provide resolver functions for your schema fields
const resolvers = {
  Query: {
    // getUser: () => {
    //   return {
    //     id: "Foo",
    //   };
    // },

    getTasksByEventId: async (parent, { taskEventId }) => {
      try {
        const tasks = await Task.find({ eventId: taskEventId });

        console.log({ tasks });

        return tasks;
      } catch (err) {
        console.log(err);
      }
    },

    getDonationsByEventId: async (parent, { donationsEventId }) => {
      try {
        const donations = await Donation.find({ eventId: donationsEventId });

        console.log({ donations });

        return donations;
      } catch (err) {
        console.log(err);
      }
    },

    getDonationsByTaskId: async (parent, { donationsTaskId }) => {
      try {
        const donations = await Donation.find({ taskId: donationsTaskId });

        console.log({ donations });

        return donations;
      } catch (err) {
        console.log(err);
      }
    },

    getEventsByUserId: async (parent, { createdById }) => {
      try {
        const events = await Event.find({ createdBy: createdById });

        console.log({ events });

        return events;
      } catch (err) {
        console.log(err);
      }
    },

    getUserById: async (_, { userId }) => {
      try {
        const user = await User.findById(userId);

        console.log({ user });

        return user;
      } catch (err) {
        console.log(err);
      }
    },

    getEventById: async (_, { eventId }) => {
      try {
        const event = await Event.findById(eventId);

        // console.log({ event })

        return event;
      } catch (err) {
        console.log(err);
      }
    },

    // getUser: async (_, { userId }) => {
    //   const user = await User.findById(userId)

    //   if (!user) {
    //     throw new Error('Product not found')
    //   }

    //   return user
    // },

    getUsers: async () => {
      try {
        const users = await User.find({});

        console.log({ users });

        return users;
      } catch (err) {
        console.log(err);
      }
    },

    getDonations: async () => {
      try {
        const donations = await Donation.find({});

        console.log({ donations });

        return donations;
      } catch (err) {
        console.log(err);
      }
    },

    getEvents: async () => {
      try {
        const events = await Event.find({});

        // console.log({ events })

        return events;
      } catch (err) {
        console.log(err);
      }
    },

    getTasks: async () => {
      try {
        const tasks = await Task.find({});

        console.log({ tasks });

        return tasks;
      } catch (err) {
        console.log(err);
      }
    },
  },

  Mutation: {
    // events
    newEvent: async (_, { input }) => {
      try {
        const event = new Event(input);

        const result = await event.save();

        return result;
      } catch (err) {
        console.log(err);
      }
    },
    updateEvent: async (_, { id, input }) => {
      let event = await Event.findById(id);

      if (!event) {
        throw new Error("Event not found");
      }

      event = await Event.findOneAndUpdate({ _id: id }, input, {
        new: true,
      });

      return event;
    },
  },
};

export default resolvers;
