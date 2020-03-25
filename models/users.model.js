 function findUser(db,email) {
    return db.collection('users').find({'email':email}).toArray();
    }

  async function findAllUsers(db) {
   return db.collection('users').find().toArray();
  }

   function saveUser(db, user) {
        // db.collection('users').insertOne(user,function(err, user) 
        // { return user.insertedId;}
        // )
        db.collection("users").insertOne( user, function( err, ret) {
          //console.log( ret );
          return ret.insertedId;
       })
  }
  async function findUserByObjectId(db, userId) {
    return  db.collection('users').find(({'_id': userId}));
  }

  async function deleteFormData(db, userId) {
    db.collection('users').deleteOne({ id: userId });
  }

  module.exports = {
    findUser,
    findAllUsers,
    deleteFormData,
    saveUser,
  };
  