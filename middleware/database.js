import { MongoClient } from 'mongodb';
import nextConnect from 'next-connect';
const uri = "mongodb://localhost:27017/";
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