// mongoose model

const mongoose = require ('mongoose')

const userQuestionSchema= new mongoose.Schema ({
    question: {type: String, required: true},
    answer: {type: String},
    createdAt: {type: Date, default: Date.now }
})

module.exports = mongoose.model('UserQuestion', userQuestionSchema)


