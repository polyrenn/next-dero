import nextConnect from 'next-connect';
import middleware from '../../middleware/database';

const handler = nextConnect();

handler.use(middleware);

handler.post(async (req, res) => {
    
    let data = req.body;
    data = JSON.parse(data);
    let category = data.category;
    let price = data.price
    const filter = { name: "Dero" };
    let newvalues = { $set: {currenttank: "Tank B"} };

    let result = await req.db.collection('branch').updateOne(filter, newvalues)
    res.json(result);
});

export default handler;