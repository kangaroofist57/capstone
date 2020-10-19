const express = require('express');
const capstone = require('./server/models/capstone');
const dotenv = require('dotenv').config();
const bodyParser = require('body-parser');
const mongoose = require('./server/mongoose');
const path = require('path');
const nodemon = require('nodemon');

const { secretRoute } = require('./client/src/configs/adminID.json');
const port = process.env.PORT || 4000;
const app = express();
const clientRoutes = [
    'users',
    'data',
    'todos',
    'auth',
];

app.use( bodyParser.json() );
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(express.static(path.join(__dirname, 'client/build')));
clientRoutes.forEach(route => {
    app.get(`/${route}`, function(req, res) {
        res.sendFile(path.resolve(__dirname, 'client/build/index.html'));
    });
});

app.get(`/api/${secretRoute}`, function(req, res) {
    capstone.find({}).then(data => {
        res.send(data);
    });
});

app.post('/api/deleteUser', function(req, res) {
    const { _id } = req.body.findUser;
    capstone.findByIdAndDelete(_id).then(() => {
        
    });
});

app.get('/', function(req, res) {

});

app.post('/api/newUser', function(req, res) {
    let newUser = new capstone({
        username: req.body.username,
        password: req.body.password,
        student: [],
        todos: []
    });
    newUser.save();
});

app.post('/api/addStudent', function(req, res) {
    let list = req.body.students;
    list.push(req.body.info);
    capstone.findByIdAndUpdate(req.body.userInfo._id, {
            students: list
        }).then(data => {
    }).catch(err => console.log('mongo error', err));
});

app.post('/api/deleteStudent', function(req, res) {
    let newList = req.body.newList;
    capstone.findByIdAndUpdate(req.body.userInfo._id, {
        students: newList
    }).then(data => {
    }).catch((err) => {
        console.log(err)
    });
});

app.post('/api/editStudent', function(req, res) {
    let { oldList, userInfo } = req.body
    capstone.findByIdAndUpdate(userInfo._id, {
        students: oldList
    }).then(data => {
    }).catch(err => {
        console.log(err);
    });
});

app.post('/api/addTodo', function(req, res) {
    const { userInfo, todos } = req.body;

    capstone.findByIdAndUpdate(userInfo._id, {
        todos
    }).then(data => {
    }).catch(err => {
        console.log('mongoe err', err);
    });

});

app.post('/api/toggleTodo', function(req, res) {
    const { userInfo, todos } = req.body;
    capstone.findByIdAndUpdate(userInfo._id, {
        todos
    }).then(data => {
    });
});

app.post('/api/deleteTodo', function(req, res) {
    const { userInfo, todos } = req.body;
    capstone.findByIdAndUpdate(userInfo._id, {
        todos
    }).then(data => {
    });
});

app.listen(port);

console.log(`Listening on port ${port}`);

