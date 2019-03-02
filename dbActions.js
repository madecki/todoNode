const MongoClient = require('mongodb').MongoClient
const url = 'mongodb://arkadiuszPasciak:1qa2ws3ed@ds155845.mlab.com:55845/todopasciak';
const dbName = 'todopasciak';
const collectionName = 'tasks';
const ObjectID = require('mongodb').ObjectID; 

const client = new MongoClient(url, { useNewUrlParser: true });

function getTasksFromDB() {
    return new Promise((resolve, reject) => {
        client.connect(function (err, client) {
            if (err) throw err;
    
            const db = client.db(dbName);
    
            db.collection(collectionName).find().toArray(function (err, result) {
                if (err) {
                    reject('Error while finding tasks to do!');
                }
                resolve(JSON.stringify(result));
            })
        })
    });
} 

const addTask = (task) => new Promise((resolve, reject) => {
    client.connect((err, client) => {
        if (err) throw err;

        const db = client.db(dbName);

        db.collection(collectionName).insertOne(task);

        resolve(task);
    })
})

const editTask = (task) => new Promise((resolve, reject) => {
    client.connect((err, client) => {
        if (err) throw err;

        const db = client.db(dbName);

        db.collection(collectionName).updateOne({ "_id": ObjectID(task.id) },
            { $set: {
                name: task.name,
                desc: task.desc,
                prior: task.prior,
                status: task.status,
            }},
            (err, res) => {
                if (err) throw err;

                resolve(res);
            })
        })
})

module.exports = {
    getTasksFromDB,
    addTask,
    editTask
}