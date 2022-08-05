import cors from 'micro-cors';
import { ApolloServer } from 'apollo-server-micro'
import { resolvers, typeDefs } from '../../schemas'
import connectDb from '../../lib/dbConnect'
import { send } from 'micro';

connectDb()

const corsHandler = cors();

export const config = {
  api: {
    bodyParser: false,
  },
}

const apolloServer = new ApolloServer({ resolvers, typeDefs });

module.exports = apolloServer.start().then(() => {
  const handler = apolloServer.createHandler({ 
    path: '/api/graphql',
  });

  return corsHandler((req, res) => req.method === 'OPTIONS' ? send(res, 200, 'ok') : handler(req, res))
});