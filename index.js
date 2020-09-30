const express = require('express');
const capstone = require('./server/models/capstone');
const dotenv = require('dotenv').config();
const bodyParser = require('body-parser');
const mongoose = require('./server/mongoose');

const port = process.env.PORT || 4000;
const app = express();

// return capstone.find({}).then(data => {
//     console.log(data);
// });

app.use( bodyParser.json() );
app.use(bodyParser.urlencoded({
  extended: true
}));

app.get('/api/creds', function(req, res) {
    capstone.find({}).then(data => {
        res.send(data);
    });
    // res.send('this is a new test');
});

app.get('/', function(req, res) {

});

app.post('/api/newUser', function(req, res) {
    // console.log(req.body.test);
    let newUser = new capstone({
        username: req.body.username,
        password: req.body.password,
        student: [],
        todos: []
    });
    newUser.save();
});

app.patch('/api/addStudent', function(req, res) {
    let list = req.body.students;
    // return console.log(req.body.info);
    list.push(req.body.info);
    capstone.findByIdAndUpdate(req.body.userInfo._id, {
            students: list
        }).then(data => {
        console.log('data saved', data);
    }).catch(err => console.log('mongo error', err));
    // console.log(list);
});

app.patch('/api/deleteStudent', function(req, res) {
    let newList = req.body.newList;
    // return console.log('newlist', newList);
    capstone.findByIdAndUpdate(req.body.userInfo._id, {
        students: newList
    }).then(data => {
        // console.log(data);
    }).catch((err) => {
        console.log(err)
    });
});

app.patch('/api/editStudent', function(req, res) {
    let { oldList, userInfo } = req.body
    // return console.log(oldList);
    capstone.findByIdAndUpdate(userInfo._id, {
        students: oldList
    }).then(data => {
        // console.log(data);
    }).catch(err => {
        console.log(err);
    });
});

app.patch('/api/addTodo', function(req, res) {
    const { userInfo, todos } = req.body;

    // console.log(todos);
    capstone.findByIdAndUpdate(userInfo._id, {
        todos
    }).then(data => {
        // console.log(todos);
    }).catch(err => {
        console.log('mongoe err', err);
    });

    // console.log(userInfo, todos);
});

app.patch('/api/toggleTodo', function(req, res) {
    const { userInfo, todos } = req.body;
    // console.log(todos);
    capstone.findByIdAndUpdate(userInfo._id, {
        todos
    }).then(data => {
        // console.log(data);
    });
});

app.patch('/api/deleteTodo', function(req, res) {
    const { userInfo, todos } = req.body;
    // console.log(userInfo);
    capstone.findByIdAndUpdate(userInfo._id, {
        todos
    }).then(data => {
        // console.log(data);
    });
})

app.listen(port);

console.log(`Listening on port ${port}`);

// {"_id":{"$oid":"5f67f94cdaace374d602d764"},"username":"test","password":"2020","students":[{"first":"Mary","middle":"Ray","last":"Doe","dob":"00-00-0000","address":"435 Martin Luther King Blvd","contact":"999-999-9999","notes":"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facilis reiciendis asperiores tenetur fuga reprehenderit excepturi perspiciatis illo dolorum, alias laborum quidem voluptatum deleniti, quisquam, temporibus obcaecati quis est quae. Cupiditate possimus corporis ab at quam numquam, explicabo architecto cum officiis, itaque molestias ratione nihil odit! Beatae inventore accusantium ad sunt amet vero vitae itaque blanditiis, atque eligendi quos doloribus eos vel impedit fugit ullam earum totam magnam exercitationem praesentium molestiae, nisi quaerat. Earum doloribus quo dolore sunt voluptates, nisi pariatur voluptatibus similique suscipit a provident ullam molestiae nostrum? Doloremque eum molestiae, qui praesentium ex pariatur provident quos numquam aut vero!"},{"first":"Danny","middle":"Ralp","last":"Solami","dob":"09-31-1990","address":"2034 North Conker Ave","contact":"000-000-0000","notes":"Behaves very well"},{"first":"test","middle":"test","last":"test","dob":"test","address":"test","contact":"test","notes":"test"}]}