import nextConnect from 'next-connect';
import middleware from '../../middleware/database';

const handler = nextConnect();

handler.use(middleware);


handler.post(async (req, res) => {

    let data = req.body;
    data = JSON.parse(data);
    let currtank = data.currenttank;
    let balancea = data.loss.tanka
    let balanceb = data.loss.tankb
    let date;
    date = new Date().toISOString().split('T')[0] 
    

    let newValues;
    let switchedTo;
    let loss;

    if(currtank == 'Tank A') {
        newValues = { $set: { 'currenttank': 'Tank B' }};
        switchedTo = 'Tank B'
        loss = balancea
    }

    if(currtank == 'Tank B') {
        newValues = { $set: { 'currenttank': 'Tank A' }};
        switchedTo = 'Tank A'
        loss = balanceb
    }

   

  
    const query = { name: 'Dero' };

    let switchObj = {
        previous: currtank,
        switched: switchedTo,
        date: date,
        loss: loss
    }

    let result = await req.db.collection('branch').updateOne( query, newValues);
    let switchLog = await req.db.collection('switchlog').insertOne( switchObj );
    res.json(result);
});



export default handler;