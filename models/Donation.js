const { Schema, model } = require('mongoose');

const User = require('./User');
const Task = require('./Task');

const donationSchema = new Schema(
  {
    taskId: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Task',
      },
    ],
    userId: [
      {
        type: Schema.Types.ObjectId,
        ref: 'User',
      },
    ],
    donationHours: {
      type: Number,
      required: true,
      default: 0,
    },
  }
);

const Donation = model('Donation', donationSchema);

module.exports = Donation;