const express = require('express');
const app = express();
app.use(express.json());

app.listen(3000, () => console.log('Listening on port 3000'));

app.get('/hello', (req,res) => {
    console.log("heaers", req.headers);
    console.log('Nethods', req.method);
    res.send('Received get \n');


});

app.post('/hello', (req,res) => {
    console.log("heaers", req.headers);
    console.log('Nethods', req.method);
    console.log('body', req.body);
    res.send('Received post \n');

});

