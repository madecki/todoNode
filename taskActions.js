const express = require('express');
const router = express.Router();
const dbActions = require('./dbActions');
const Task = require('./migrations/random_tasks').Task;

router.get('/getTasks', (req, res) => {
    dbActions.getTasksFromDB.then((tasks) => {
      res.send(tasks)
    })
})

router.post('/addTask', (req, res) => {
    console.log(req.body);
    const taskData = req.body;
    const task = new Task(taskData.name, taskData.desc, taskData.prior, taskData.status);

    dbActions.addTask(task).then((tasks) => {
      res.send(tasks)
    })
})

// router.put('/updateTask', (req, res) => {
//     getTasksFromDB.then((tasks) => {
//       res.send(tasks)
//     })
// })

module.exports = router;