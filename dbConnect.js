const mongoose = require('mongoose')

const URL = 'mongodb+srv://trdxlucifer:1207008@cluster0.4hhkrvb.mongodb.net/Resume_build'

mongoose.connect(URL , {useUnifiedTopology:true , useNewUrlParser:true})

const connection = mongoose.connection

connection.on('connected' , ()=>{
    console.log('Mongo DB Connection Successfull')
})
connection.on('error' , (error)=>{
    console.log(error)
})