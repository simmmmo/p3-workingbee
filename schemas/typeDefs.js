import { gql } from 'apollo-server-micro'

const typeDefs = gql`

  type Event {
    _id: ID
    title: String
    thoughtAuthor: String
    subTitle: String
    organisationName: String
    category: String
    date: String
    startTime: String
    endTime: String
    eventImage: String
    locationName: String
    address: String
    suburb: String
    state: String
    postcode: String
    lat: Int
    long: Int
    link: String
    description: String
    createdBy: ID
  }

  type User {
    _id: ID
    firstName: String
    lastName: String
    phone: String
    dateOfJoin: String
    description: String!
    password: String
  }

  type Task {
    _id: ID
    eventId: ID
    taskTitle: String
    taskDescription: String
    taskGoalHours: Int
  }

  type Donation {
    _id: ID
    taskId: ID!
    userId: ID!
    donationHours: Int
  }

  input EventInput {
    title: String
    thoughtAuthor: String
    subTitle: String
    organisationName: String
    category: String
    date: String
    startTime: String
    endTime: String
    eventImage: String
    locationName: String
    address: String
    suburb: String
    state: String
    postcode: String
    lat: Int
    long: Int
    link: String
    description: String
    createdBy: ID!
  }

  type Userinput {
    firstName: String
    lastName: String
    phone: String
    dateOfJoin: String
    description: String!
    password: String
  }

  type TaskInput {
    eventId: ID
    taskTitle: String
    taskDescription: String
    taskGoalHours: Int
  }

  input DonationInput {
    taskId: String
    userId: String
    donationHours: Int
  }

  type Query {
    getEvents: [Event]!
    getEventById(eventId: ID!): Event
    getTasksByEvent(eventId: ID!): [Task]
    getDonationsByTask(taskId: ID!): [Donation]
  }  
  
  type Mutation {
    newDonation(input: DonationInput): Donation
  }
`

module.exports = typeDefs