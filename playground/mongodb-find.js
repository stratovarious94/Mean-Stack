const {MongoClient, ObjectID} = require('mongodb'); //MongoClient var = MongoClient property

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if(err) {
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');

  db.collection('Todos').find({completed: false}).toArray().then((docs) => {
    console.log('Todos');
    console.log(JSON.stringify(docs, undefined, 2));
  }, (err) => {
    console.log('Unable to fetch todos', err);
  });

  db.collection('Todos').find({text: 'Something to do'}).count().then((count) => {
    console.log('Todos count', count);
  }, (err) => {
    console.log('Unable to fetch todos', err);
  });

  db.close();
})
