const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
require('dotenv').config()

const app = express();

app.use(cors());
app.use(express.json());


const uri = process.env.ATLAS_URI;
mongoose.connect(uri,{useNewUrlParser:true});

const connection = mongoose.connection;
connection.once('open',()=>{
    console.log('Successfuly connected to the database');
})

const blogRouter = require('./routes/blog');
app.use('/blogs',blogRouter);

app.get('/',(req,res)=>{
    res.send("ok");
})

app.listen(5000, ()=>{
    console.log('Server is running on port 5000');
})