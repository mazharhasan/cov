
var ObjectId = require('mongodb').ObjectID;

async function loadAnwersById(db,questionId) {
    return db.collection('answers').find({"question_id": questionId}).toArray();
    }
  async function loadAllAnwers(db) {
   return db.collection('answers').find().toArray();
  }

  module.exports = {
    loadAllAnwers,
    loadAnwersById,
  };
  