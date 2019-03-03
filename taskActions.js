const express = require('express');
const router = express.Router();
const dbActions = require('./dbActions');
const Task = require('./migrations/random_tasks').Task;

router.get('/getTasks', (req, res) => {
    dbActions.getTasksFromDB().then((tasks) => {
      res.send(tasks)
    })
})

router.post('/addTask', (req, res) => {
    const taskData = req.body;
    const task = new Task(taskData.name, taskData.desc, taskData.prior, taskData.status);

    dbActions.addTask(task).then((tasks) => {
      res.send(tasks)
    })
})

router.put('/editTask', (req, res) => {
    const taskData = req.body;
    const task = new Task(taskData._id, taskData.name, taskData.desc, taskData.prior, taskData.status);

    dbActions.editTask(task).then((resp) => {
        res.send(resp)
    })
})

module.exports = router;
