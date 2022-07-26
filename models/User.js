const { Schema, model } = require('mongoose');


const Order = require('./Order');

const userSchema = new Schema({
  firstName: {
    type: String,
    required: true,
    trim: true,
  },
  lastName: {
    type: String,
    required: true,
    trim: true,
  },
  phoneNumber: {
    type: String,
    required: true,
    unique: true,
  },     
  email: {
    type: String,
    required: true,
    unique: true,
    match: [/.+@.+\..+/, 'Must use a valid email address'],
  },
  dateOfJoin: {
    type: Date,
    default: Date.now,
    // get: (timestamp) => dateFormat(timestamp),
  },
  profileDescription: {
    type: String,
    trim: true,
  },
  password: {
    type: String,
    required: true,
    minlength: 5,
  },
  events: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Event'
    },
  ],
  donations: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Donation'
    }
  ]
  },
);

const User = model('User', userSchema);

module.exports = User;
