const mongoose = require('mongoose');

// schema
const personSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    age:{
        type:String
    },
    work:{
        type:String,
        enum: ['chef', 'waiter', 'manager'],
        required:true
    },
    mobile:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    address:{
        type:String
    },
    salery:{
        type:Number,
        required:true
    }
});   

// model
const personModel = mongoose.model('personModel', personSchema);
module.exports = personModel;