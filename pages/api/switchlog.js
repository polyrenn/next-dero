import nextConnect from 'next-connect';
import middleware from '../../middleware/database';

const handler = nextConnect();

handler.use(middleware);

handler.get(async (req, res) => {
    let date
    date = new Date().toISOString().split('T')[0];

    const query = { date:  new RegExp(`^${date}`) }

    let doc = await req.db.collection('switchlog').find(query).toArray();
    res.json(doc);
});

export default handler;