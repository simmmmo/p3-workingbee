const { Schema, model } = require('mongoose');

const taskSchema = new Schema(
  {
    eventId: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Event',
      },
    ],
    taskTitle: {
      type: String,
      required: true,
      trim: true,
    },
    taskDescription: {
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