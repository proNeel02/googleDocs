const express  = require('express');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
const port = 8080;

app.get('/',(req,res) => {
res.send('Express + TypeScript Server');
})

app.listen(port, () => {
    console.log("Server is Running at port : ",port);
})