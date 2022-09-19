const express = require('express') 
const path = require('path');
const db = require('./config/mongoose')


const app= express();

app.use (express.urlencoded({extended:true}));
app.use(express.static('assets'))

app.get('/', (req,res)=>{
    return res.send("hello")
})

app.listen(8000,(err)=>{
    if(err){ console.log('Error in running'); }
    console.log('express is running seccessfully on port 8000')
});