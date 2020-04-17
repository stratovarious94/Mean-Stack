const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/Todo');

var id = "59667f660352132cf8f3e07f";

if(!ObjectID.isValid(id)) {
  console.log('ID not valid');
}

Todo.find({_id: id}).then((todos) => {
  console.log('Todos: ', todos);
}).catch((err) => {
  console.log(err);
});

Todo.findOne({_id: id}).then((todo) => {
  if(!todo) {
    return console.log('ID not found.');
  }
  console.log('Todo: ', todo);
}).catch((err) => {
  console.log(err);
});

Todo.findById(id).then((todo) => {
  if(!todo) {
    return console.log('ID not found.');
  }
  console.log('Todo by ID: ', todo);
}).catch((err) => {
  console.log(err);
});
