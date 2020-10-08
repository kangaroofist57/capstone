const express = require('express');
const path = require('path');
const app = express();

app.use(express.static('client/build'));
// app.get('/test', (req, res) => {
//     res.send('ok')
//   });
app.get('*', function(req, res) {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
});

app.listen(5000);