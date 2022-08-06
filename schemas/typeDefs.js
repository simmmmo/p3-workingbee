import { gql } from 'apollo-server-micro';

const typeDefs = gql`
  type User {
    id: ID
  }

  type Donation {
    _id: ID
    taskId: ID
    userId: ID
    donationHours: Float
    eventId: ID
  }

  type Query {
    getUser: User
    getDonations: [Donation]
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

//   type Query {
//     getEvents: [Event]
//   }  
  
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

export default typeDefs