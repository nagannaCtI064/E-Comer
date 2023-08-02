const mongoose = require('mongoose');

const Mydata = new mongoose.Schema({
  email_Id: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  confirmpassword: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  }
});
module.exports=mongoose.model('Mydata',Mydata)
