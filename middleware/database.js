import { MongoClient } from 'mongodb';
import nextConnect from 'next-connect';
const username = encodeURIComponent("dadmin");
const password = encodeURIComponent("34Ether34%");
const uri = `mongodb://${username}:${password}@127.0.0.1:27017/?authSource=admin&authMechanism=DEFAULT`;
const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

async function database(req, res, next) {
  if (!client.isConnected) await client.connect();
  req.dbClient = client;
  req.db = client.db('derogas');
  return next();
}

const middleware = nextConnect();

middleware.use(database);

export default middleware;