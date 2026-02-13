const express = require('express')
const db = require('./db/connection')
const defaultfun = require('./default.js')

const app = express()
db()
defaultfun()
app.use('/api',require('./Routes/ProductRoutes.js'))
app.get("/",(req,res)=>{
    res.send("Server is Running")
})


const PORT = 5000
app.listen(PORT,()=>{
    console.log("Server is Running")
})