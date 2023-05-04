const express = require('express');
const app = express();
const path = require('path');

app.use(express.static('public'));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/templates/index.html');
});


app.listen(3000, () => {
    console.log('Server running on port 3000');
});
