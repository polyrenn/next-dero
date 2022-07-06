import nextConnect from 'next-connect';
import middleware from '../../middleware/database';

const handler = nextConnect();

handler.use(middleware);

handler.get(async (req, res) => {

    // Return Current Dates Sales if no date passed

   
    let date;
    
    date = req.query.date
 
    

    let replace = `/^${date}/`
    let re = new RegExp(replace);
    const query = { date:  new RegExp(`^${date}`) }

    let doc = await req.db.collection('transaction').find(query).toArray();
    console.log(doc);
    console.log(req.query.date);
    console.log(date);
    res.json(doc);
    


     // Total Kg Sold
     /*
    let aggregate = [
        {
          $group: {
            _id: null,
            totalQty: { $sum: '$totalkg' },
          },
        },
        { $project: { _id: 0 } },
      ]
    
    
    const aggCursor =  await req.db.collection('transaction').aggregate(aggregate).toArray()
    
        console.log(aggCursor);
        res.json(aggCursor);
    */    
    
});

export default handler;