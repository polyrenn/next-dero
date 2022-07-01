import nextConnect from 'next-connect';
import middleware from '../../middleware/database';

const handler = nextConnect();

handler.use(middleware);

handler.get(async (req, res) => {

    const query = { quantity: 2 }

    let doc = await req.db.collection('transaction').findOne(query)
    console.log(doc);
    res.json(doc);
});

export default handler;