import nextConnect from 'next-connect';
import middleware from '../../middleware/database';

const handler = nextConnect();

handler.use(middleware);

handler.post(async (req, res) => {
    
    let data = req.body;
    data = JSON.parse(data);
    let category = data.category;
    let price = data.price
    let updateVal = {};
    updateVal[category] = data.price
    const filter = { name: "Dero" };
    let query = `priceperkg.${category}`;

    let newvalues;

    switch (category) {
        case 'domestic':
            newvalues = { $set: {'priceperkg.domestic': price }};
            break;
        case 'eatery':
            newvalues = { $set: {'priceperkg.eatery': price }};
            break;    
        case 'dealer':
            newvalues = { $set: {'priceperkg.dealer': price }};
            break;

        case 'hotel':
            newvalues = { $set: {'priceperkg.hotel': price }};
            break;    
       
    }

   

    let result = await req.db.collection('branch').updateOne(filter, newvalues)
    res.json(result);
});

export default handler;