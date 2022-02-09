const express = require('express');
const app = express();

app.get('/test', function(req, res){
    res.send('welcome to express');
});

app.listen(3000);           


