const { User, Event, Task, Donation } = require('../models');

const resolvers = {
  Query: {
    // Events
    getEvents: async () => {
      try {
        const events = await Event.find({}) 

        return events
      } catch (err) {
        console.log(err)
      }
    },

    getEventById: async (_, { _id }) => {
      try {
        const event = await Event.findById(_id)

        return event
      } catch (err) {
        console.log(err)
      }
    },

    // Donations
    getDonationsByTask: async (_, { _id }) => {
      try {
        const donation = await Donation.findById(_id)

        return donation
      } catch (err) {
        console.log(err)
      }
    },
  },

  Mutation: {
    // donation
    newDonation: async (_, { input }) => {
      try {
        const donation = new Donation(input)

        const result = await donation.save()

        return result
      } catch (err) {
        console.log(err)
      }
    },   
  },
}

module.exports = resolvers