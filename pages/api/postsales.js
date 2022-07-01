import nextConnect from 'next-connect';
import middleware from '../../middleware/database';

const handler = nextConnect();

handler.use(middleware);

handler.post(async (req, res) => {

    let data = req.body;
    data = JSON.parse(data);

    let doc = await req.db.collection('transaction').insertOne({data})
    res.json(doc);
});

export default handler;