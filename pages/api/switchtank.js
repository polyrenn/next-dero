import nextConnect from 'next-connect';
import middleware from '../../middleware/database';

const handler = nextConnect();

handler.use(middleware);


handler.post(async (req, res) => {

    let data = req.body;
    data = JSON.parse(data);
    let currtank = data.currenttank;

    let newValues;

    if(currtank == 'Tank A') {
        newValues = { $set: { 'currenttank': 'Tank B' }};
    }

    if(currtank == 'Tank B') {
        newValues = { $set: { 'currenttank': 'Tank A' }};
    }

   

  
    const query = { name: 'Dero' };

    let result = await req.db.collection('branch').updateOne( query, newValues);
    res.json(result);
});



export default handler;