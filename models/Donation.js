import mongoose from 'mongoose'

// const User = require('./User');
// const Task = require('./Task');

const donationSchema = new mongoose.Schema({
    taskId: 
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Task',
      },
    userId: 
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
      },
    donationHours: {
      type: Number,
    },
    eventId:  {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Event'
    },
  }
);

export default mongoose.models.Donation || mongoose.model('Donation', donationSchema)