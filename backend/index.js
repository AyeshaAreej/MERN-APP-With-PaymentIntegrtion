const express = require('express') 
const path = require('path');
const bodyParser = require('body-parser')

const db = require('./config/mongoose')
const userRouter=require('./routes/userRouter')
const middleware = require('./middlewares/mymiddleware')

const cors = require("cors")
const app= express();

app.use(cors())
app.use(express.json())
app.use(bodyParser.json());
app.use(express.static('assets'))
app.use(bodyParser.urlencoded({extended : true}))

app.use(userRouter)
// app.get('/', (req,res)=>{
//     return res.send("hello")
// })

app.listen(8000,(err)=>{
    if(err){ console.log('Error in running'); }
    console.log('express is running seccessfully on port 8000')
});