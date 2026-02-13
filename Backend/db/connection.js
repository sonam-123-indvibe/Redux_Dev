const mongoose = require('mongoose')

const db = async () =>{
    try {
        await mongoose.connect("mongodb+srv://sona:1234@cluster0.y8bu5do.mongodb.net/?appName=Cluster0")
        console.log("Mongoose Connnect SucessFully")
    } catch (error) {
        console.log(error)
    }
}

module.exports = db