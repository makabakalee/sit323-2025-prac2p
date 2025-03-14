const express = require('express');
const app = express();
const port = 3000;

app.get('/',(req, res)=>{
    res.send('<h1> Welcome to my website!');
});

app.listen(port,()=>{
    console.log('The server runs on http://localhost:${port}');
});