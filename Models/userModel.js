const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true,
      },
    lastName: {
        type: String,
        required: true,
      },
    userName: {
        type: String,
        required: true,
      },
     email: {
        type: String,
        required: true,
      },
     password: {
        type: String,
        required: true,
      },
      key:{
        type: String,
        default: ''
      },
      ip:{
        type: String,
        
      },
      TotalAccounts:{
        type: Number
      },
      TotalRaffles:{
        type: Number
      },


    createdAt: {
        type: Date,
        default: Date.now,
      },
})


const userModel = new mongoose.model('User', userSchema);

module.exports = userModel