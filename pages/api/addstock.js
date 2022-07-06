import nextConnect from 'next-connect';
import middleware from '../../middleware/database';

const handler = nextConnect();

handler.use(middleware);

handler.post(async (req, res) => {

    let data = req.body;
    data = JSON.parse(data);
    let newValues;
    let totalkg = data.kg
    let tank = data.tank;
    if(tank == 'Tank A') {
        newValues = { $set: { 'tanks.tanka': totalkg }};
    } else if(tank == 'Tank B') {
        newValues = { $set: { 'tanks.tankb': totalkg }};
    }
  
    const query = { name: 'Dero' };

    let updatekg = await req.db.collection('branch').updateOne(query, newValues);
    let addstock = await req.db.collection('stock').insertOne(data);
   
    res.json(updatekg);
});

export default handler;