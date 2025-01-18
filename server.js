const express = require('express');
const app = express();
const mclient = require('mongodb').MongoClient;
const cors = require('cors');
require('dotenv').config();


const DBurl =  process.env.DBurl;
const PORT = process.env.PORT;

app.use(express.json());

mclient.connect(DBurl)
.then((client)=>{
    const dbobj = client.db('fronix');
})
.catch((error)=>{console.log("error in connecting DB",error)});







app.listen(PORT,()=>{console.log(`port is listening to ${PORT}`);})