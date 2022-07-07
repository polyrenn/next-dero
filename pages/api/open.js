import nextConnect from 'next-connect';
import middleware from '../../middleware/database';

const handler = nextConnect();

handler.use(middleware);

handler.post(async (req, res) => {

    let data = req.body;
    data = JSON.parse(data);
    let balance = data.balance
    
    const query = { name: 'Dero' };
    let newValues;
    newValues = { $set: { 'opening': balance }};

    let doc = await req.db.collection('branch').updateOne(query, newValues)
    console.log(doc);
    res.json(doc);
    


    
    
});

export default handler;