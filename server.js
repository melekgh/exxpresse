
const express = require('express')
const app = express()
const path = require('path')

app.use(require("./middlewar/activeday")); 
app.use(express.static('views'))
app.listen(5000 ,()=>{
    console.log('Server is running ')
}) 