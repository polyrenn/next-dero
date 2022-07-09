import nextConnect from 'next-connect';
import middleware from '../../middleware/database';

const handler = nextConnect();

handler.use(middleware);

handler.get(async (req, res) => {

    // Return Current Dates Sales if no date passed

   
 
    

   

    let doc = await req.db.collection('stock').find({}).toArray();
    console.log(doc);
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