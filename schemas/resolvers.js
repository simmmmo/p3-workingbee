// const { Donation } = require('../models');
import Donation from '../models/Donation';
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
    getUser: () => {
      return {
        id: "Foo",
      };
    },

    getDonations: async () => {
      try {

        const donations = await Donation.find({});

        console.log({ donations })

        return donations
      } catch (err) {
        console.log(err)
      }
    },
  },
};

export default resolvers
