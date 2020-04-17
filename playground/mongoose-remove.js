const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/Todo');

Todo.remove({}).then((results) => {
  console.log(results);
});

Todo.findOneAndRemove({_id: '59667f660352132cf8f3e07f'}).then((todo) => {
  console.log(todo);
});

Todo.findByIdAndRemove('59667f660352132cf8f3e07f').then((todo) => {
  console.log(todo);
});
