const express = require('express');
const app = express();
const bodyParser = require('body-parser')
const port = 9876;
const noCache = require('nocache')

const taskActions = require('./taskActions');

app.use(noCache());
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use(taskActions);

app.listen(port, () => console.log(`Todo backend listening on localhost:${port}!`))