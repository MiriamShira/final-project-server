const express=require('express');
const app=express();
const path= require('path');
const db = require('./DB/mongoose');
require('dotenv').config();
const logger=require('./logger/logs');
const user=require('./Router/user');
const port=process.env.PORT;
app.use(express.json());

app.use(express.static('static'))
app.use('/api/users',user );
db.connectFunction();
app.use((err,req,res,next)=>{
    logger.error(err.message);
    res.status(500).send('Error Happend');
})

app.listen(port,()=>{
    console.log("in listen");
    logger.info(`App listening on port ${port}`);
})