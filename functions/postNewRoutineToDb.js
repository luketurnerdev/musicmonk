const co = require('co');
const mongoose = require('mongoose');

let conn = null;

const uri=process.env.GATSBY_MONGODB_CONNECTION_STRING;

exports.handler = function(event, context, callback) {
  const userId = event.queryStringParameters.userId;
  context.callbackWaitsForEmptyEventLoop = false;
  createRoutine(userId, data)
    .then(res => {
      callback(null, res);
    })
    .catch(error => callback(error));
}

const createRoutine = (userId, data) => {
  const {title, steps} = data;
  return co(function*() {
    // if no connection, try to connect
    if (conn==null) {
      conn = yield mongoose.createConnection(uri, {
        bufferCommands: false,
        bufferMaxEntries: 0
      });
      // Create schema
      conn.model('Routine', new mongoose.Schema({
        userId: String,
        title: String,
        steps: Array,
      }));
    }

    const Model = conn.model('Routine');

    // TODO = change this to specify the userID as below
    // const doc = yield Model.find({userId: userId});
    const doc = yield Model.find({userId: userId});
    
    console.log('model:')
    console.log(Model)
    console.log('doc:')
    console.log(doc)

    const response = {
      statusCode: 200,
      body: JSON.stringify(doc)
    };
    return response;

  })
}