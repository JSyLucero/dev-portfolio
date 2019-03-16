const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
  firstName: String,
  lastName: String,
  password: String,
  dateJoined: {
    type: Date,
    default: new Date()
  }
});

module.exports = mongoose.model('users', userSchema);