// main entry 

const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
require('dotenv').config()

const app = express()
app.use(cors())
app.use(express.json())

// mongodb connection

mongoose.connect(process.env.MONGO_URI)
.then(()=> console.log("Connected to MongoDB"))
.catch(err => console.log ("Mongo error: ", err))

// route

app.use('/api/qa', require('./qaroutes'))

app.listen(5051, () => console.log("Server is listening on on http://localhost:5051"))

