const mongoose = require ('mongoose')


const numberCollection= 'user'

const numberSchema =new mongoose.Schema({
    value: Number,
})

const Numbers = mongoose.model (numberCollection, numberSchema)

module.exports= Numbers