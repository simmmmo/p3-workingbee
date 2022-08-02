import mongoose from 'mongoose'

const Event = require('./Event');

const taskSchema = new mongoose.Schema({
    eventId: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Event',
      },
    ],
    title: {
      type: String,
      required: true,
      trim: true,
    },
    description: {
      type: String,
      trim: true,
    },
    goalHours: {
      type: Number,
      required: true,
    },
  }
);

export default mongoose.models.Task || mongoose.model('Task', taskSchema)