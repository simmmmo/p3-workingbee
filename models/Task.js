import mongoose from 'mongoose';

// const Event = require('./Event');

const taskSchema = new mongoose.Schema({
    eventId:  {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Event'
      },
    taskTitle: {
      type: String,
      required: true,
      trim: true,
    },
    taskDescription: {
      type: String,
      trim: true,
    },
    taskGoalHours: {
      type: Number,
      required: true,
    },
  }
);

export default mongoose.models.Task || mongoose.model('Task', taskSchema)
