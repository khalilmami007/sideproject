const express=require('express')
const cors=require('cors') 

const app =express()

app.use(express.json(),express.urlencoded({extended:true}),cors());

require("dotenv").config()
require('./config/mongoose.config')

const port=process.env.PORT 

app.listen(port,()=>{
    console.log(`server is running on Port ${port} `)

})