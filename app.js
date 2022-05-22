const express=require('express');
const app=express();
const path= require('path');
const db = require('./DB/mongoose');
require('dotenv').config();
const logger=require('./logger/logs');
const user=require('./Router/user');
const allergens=require('./Router/allergens');
const nutritionalFact=require('./Router/nutritionalFact');
const product=require('./Router/product');
const port=process.env.PORT;
const cors=require('cors')
app.use(express.json());

// app.use((req,res,next)=>{
//    res.header('Access-Control-Allow-Origion')
// })
app.use(cors());
app.use(express.static('static'))
app.use('/api/users',user );
app.use('/api/allergens',allergens );
app.use('/api/nutritionalfact',nutritionalFact );
app.use('/api/product',product );
db.connectFunction();

app.use((err,req,res,next)=>{
    logger.error(err.message);
    res.status(500).send('Error Happend');
})

app.listen(port,()=>{
    console.log("in listen");
    logger.info(`App listening on port ${port}`);
})