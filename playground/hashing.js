var {SHA256} = require('crypto-js');
const jwt = require('jsonwebtoken');

// var message = 'I am user number 3';
// var hash = SHA256(message).toString();
//
// console.log(`Message: ${message}`);
// console.log(`Hash: ${hash}`);
//
// var data = {
//   id: 4
// };
//
// var token = {
//   data,
//   hash: SHA256(JSON.stringify(token.data + 'somesecret').toString())
// };
//
// var resultHash = SHA256(JSON.stringify(token.data + 'somesecret').toString());
//
// if( resultHash === token.hash) {
//
// }

var data = {
  id: 10
};

var token = jwt.sign(data, '123abc');
var decoded = jwt.verify(data, '123abc');
