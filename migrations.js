const tasks = require('./migrations/random_tasks');

const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');

const url = 'mongodb://localhost:27017';
const dbName = 'todo';

const client = new MongoClient(url);

console.log('Starting a database connection \n------------------------------')

const tasksMigration = function(db, callback) {
  const collection = db.collection('tasks');

  collection.insertMany(tasks.getTasks(), function(err, result) {
    assert.equal(err, null);
    console.log("Inserted random tasks into DB");
    callback(result);
  });
}

client.connect(function(err) {
  assert.equal(null, err);
  console.log("Connected successfully to server");

  const db = client.db(dbName);
  tasksMigration(db, function() {
    client.close();
  });

  client.close();
});