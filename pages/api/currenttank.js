import nextConnect from 'next-connect';
import middleware from '../../middleware/database';

const handler = nextConnect();

handler.use(middleware);


handler.get(async (req, res) => {

    const query = { _id: '62b2f12e48aa5c8c088970d8' }

    let doc = await req.db.collection('branch').findOne()
    res.json(doc);
});



export default handler;