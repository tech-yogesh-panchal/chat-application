const http = require('http');
const express = require('express');
const app = express();
const server = http.createServer(app);
require('dotenv').config();
console.log("process.env.PORT ===>",process.env.PORT);

app.get('/',(req,res)=>{
    res.send({ response: "Server is up and running." }).status(200);
})

const port = process.env.PORT || 5000

server.listen(port, () => console.log(`Server has started. ${port}` ));