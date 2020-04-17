const {MongoClient, ObjectID} = require('mongodb'); //MongoClient var = MongoClient property

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if(err) {
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');

  db.collection('Users').insertOne({
    name: 'Jonnie',
    age: 22,
    location: 'here'
  }, (err, results) => {
    if(err) {
      return console.log('Unable to insert to user');
    }
    console.log(JSON.stringify(results.ops, undefined, 2)); //Print results of collection
    console.log(results.ops[0]._id.getTimestamp()); //Get time of insertion
  });

  db.close();
})
