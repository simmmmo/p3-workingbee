import { gql } from "apollo-server-micro";

const typeDefs = gql`
  type User {
    _id: ID
    firstName: String
    lastName: String
    phone: String
    description: String
    password: String
  }

  type Event {
    _id: ID
    title: String
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
    lat: Float
    long: Float
    link: String
    description: String
    createdBy: ID
  }

  input EventInput {
    title: String
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
    lat: Float
    long: Float
    link: String
    description: String
    createdBy: ID
  }

  type Donation {
    _id: ID
    taskId: ID
    userId: ID
    donationHours: Float
    eventId: ID
  }

  type Task {
    _id: ID
    eventId: ID
    taskTitle: String
    taskDescription: String
    taskGoalHours: Float
  }

  type Query {
    getUsers: [User]
    getUserById(userId: ID!): User
    getTasks: [Task]
    getTasksByEventId(taskEventId: ID!): [Task]
    getEvents: [Event]
    getEventById(eventId: ID!): Event
    getDonations: [Donation]
    getDonationsByEventId(donationsEventId: ID!): [Donation]
    getDonationsByTaskId(donationsTaskId: ID!): [Donation]
  }

  type Mutation {
    newEvent(input: EventInput): Event
    updateEvent(id: ID!, input: EventInput): Event
  }
`;

// const typeDefs = gql`

//   type Event {
//     _id: ID
//     title: String!
//     subTitle: String!
//     organisationName: String!
//     category: String!
//     date: String!
//     startTime: String!
//     endTime: String!
//     eventImage: String!
//     locationName: String!
//     address: String!
//     suburb: String!
//     state: String!
//     postcode: String!
//     lat: Float!
//     long: Float!
//     link: String!
//     description: String!
//     createdBy: ID!
//   }

//   input EventInput {
//     title: String!
//     subTitle: String!
//     organisationName: String!
//     category: String!
//     date: String!
//     startTime: String!
//     endTime: String!
//     eventImage: String!
//     locationName: String!
//     address: String!
//     suburb: String!
//     state: String!
//     postcode: String!
//     lat: Float!
//     long: Float!
//     link: String!
//     description: String!
//     createdBy: ID!
//   }

// type Query {
//   getUser: User
//   getDonations: [Donation]
//   getEvents: [Event]
//   getTasks: [Task]
//   getUsers: [User]
// }

//   type Mutation {
//     newEvent(input: EventInput): Event
//   }
// `

// type User {
//   _id: ID
//   firstName: String!
//   lastName: String!
//   phone: String!
//   description: String!
//   password: String!
// }

// type Task {
//   _id: ID
//   eventId: ID!
//   taskTitle: String!
//   taskDescription: String!
//   taskGoalHours: Float!
// }

// type Donation {
//   _id: ID
//   taskId: ID!
//   userId: ID!
//   donationHours: Float
//   eventId: ID!
// }

// input UserInput {
//   firstName: String!
//   lastName: String!
//   phone: String!
//   description: String!
//   password: String!
// }

// input TaskInput {
//   eventId: ID!
//   taskTitle: String!
//   taskDescription: String!
//   taskGoalHours: Float!
// }

// input DonationInput {
//   taskId: ID!
//   userId: ID!
//   donationHours: Float
//   eventId: ID!
// }

export default typeDefs;
