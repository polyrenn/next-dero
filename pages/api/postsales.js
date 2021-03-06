import nextConnect from 'next-connect';
import middleware from '../../middleware/database';

const handler = nextConnect();

handler.use(middleware);

handler.post(async (req, res) => {

    let data = req.body;
    data = JSON.parse(data);
    let newValues;
    let totalkg = data.totalkg
    let currtank = data.currenttank

    if(currtank == 'Tank A') {
        newValues = { $inc: { 'tanks.tanka': -totalkg }};
    }

    if(currtank == 'Tank B') {
        newValues = { $inc: { 'tanks.tankb': -totalkg }};
    }

    const query = { name: 'Dero' };

    let doc = await req.db.collection('transaction').insertOne(data);
    let updatekg = await req.db.collection('branch').updateOne(query, newValues);
   
    res.json(doc);
});

export default handler;