const {MongoClient, ObjectID} = require('mongodb'); //MongoClient var = MongoClient property

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if(err) {
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');

  db.collection('Todos').deleteMany({text: 'Eat lunch'}).then((result) => {
    console.log(result);
  }, (err) => {
    console.log('Unable to delete todos', err);
  });

  db.collection('Todos').deleteOne({text: 'Eat lunch'}).then((result) => {
    console.log(result);
  }, (err) => {
    console.log('Unable to delete todos', err);
  });

  db.collection('Todos').findOneAndDelete({_id: new ObjectID('32r23r32132e')}).then((result) => {
    console.log(JSON.stringify(results, undefined, 2));
  }, (err) => {
    console.log('Unable to delete todos', err);
  });

  db.close();
})
