import { gql, ApolloServer } from "apollo-server-nextjs";
import { resolvers, typeDefs } from "../../schemas";
import dbConnect from "../../lib/dbConnect";

dbConnect();

export const config = {
  api: {
    bodyParser: false,
  },
};

const server = new ApolloServer({
  resolvers,
  typeDefs,
});

export default server.createHandler({
  expressGetMiddlewareOptions: {
    cors: {
      origin: "*",
      credentials: true,
    },
  },
});
