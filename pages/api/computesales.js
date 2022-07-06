import nextConnect from 'next-connect';
import middleware from '../../middleware/database';

const handler = nextConnect();

handler.use(middleware);

handler.get(async (req, res) => {

    // Return Current Dates Sales if no date passed
    


    let date = req.query.date
     
     

    let aggregate = [
        {
          $match: {
            date:  new RegExp(`^${date}`)
          }
        }, {
          $group : {
            _id : null, 
            totalTransfer : {
              $sum: '$payment.transfer'
            },
            totalCash : {
                $sum: '$payment.cash'
            },
            totalPos : {
                $sum: '$payment.pos'
            }  
          }
        }, {
          $project: {
            _id: 0
          }
        }
      ]
    
    
    const aggCursor =  await req.db.collection('transaction').aggregate(aggregate).toArray()
    
        console.log(aggCursor);
        res.json(aggCursor);
  
    
});

export default handler;