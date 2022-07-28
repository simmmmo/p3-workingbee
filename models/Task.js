const { Schema, model } = require('mongoose');

const Event = require('./Event');

const taskSchema = new Schema(
  {
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

const Task = model('Task', taskSchema);

module.exports = Task;