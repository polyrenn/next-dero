import nextConnect from 'next-connect';
import middleware from '../../middleware/database';

const handler = nextConnect();

handler.use(middleware);

handler.get(async (req, res) => {

    var myobj = { name: "Company Inc", address: "Highway 37" };

    let doc = await req.db.collection('transaction').insertOne(myobj)
    console.log(doc);
    res.json(doc);
});

export default handler;