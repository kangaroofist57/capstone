const express = require('express');
const capstone = require('./server/models/capstone');
const dotenv = require('dotenv').config();
const bodyParser = require('body-parser');
const mongoos = require('./server/mongoose');

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
    })
    newUser.save();
});

app.listen(port);

console.log(`Listening on port ${port}`);
