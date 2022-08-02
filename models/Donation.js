import mongoose from 'mongoose'

const User = require('./User');
const Task = require('./Task');

const donationSchema = new mongoose.Schema({
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

export default mongoose.models.Donation || mongoose.model('Donation', donationSchema)