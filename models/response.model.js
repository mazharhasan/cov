var mongo = require('mongodb');

async function findAllReponses(db,userId) {
    var o_id = new mongo.ObjectID(userId);
    console.log(o_id);
    return db.collection('responses').find({'user_id':o_id}).toArray();
    }


  async function saveResponse(db, response) {
        db.collection("responses").insertOne( response, function( err, ret) {
          console.log( ret );
          return ret;
       })
  }


  module.exports = {
    findAllReponses,
    saveResponse,
  };
  