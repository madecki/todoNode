const express = require('express')
const MongoClient = require('mongodb').MongoClient
const url = 'mongodb://localhost:27017';
const app = express()
const port = 9876

const dbName = 'todo';
const collectionName = 'tasks';

const client = new MongoClient(url, { useNewUrlParser: true });

const getTasksFromDB = new Promise((resolve, reject) => {
  client.connect(function (err, client) {
    if (err) throw err
  
    var db = client.db(dbName)
    
    db.collection(collectionName).find().toArray(function (err, result) {
      if (err) {
        reject('Error while finding tasks to do!');
      }
  
      resolve(result);
    })
  })
});

app.get('/', function (req, res) {
  getTasksFromDB.then((tasks) => {
    res.send(tasks)
  })
})

app.listen(port, () => console.log(`Todo backend listening on localhost:${port}!`))