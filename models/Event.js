import mongoose from 'mongoose'

const User = require('./User');
const Category = require('./Category');

const eventSchema = new mongoose.Schema({
    title: {
      type: String,
      required: true,
      trim: true,
    },
    subTitle: {
      type: String,
      required: true,
      trim: true,
    },
    organisation: {
      type: String,
      trim: true,
    },
    category: {
      type: Schema.Types.ObjectId,
      ref: 'Category',
      required: true,
    },
    date: {
      type: String,
      required: true,
    },
    startTime: {
      type: String,
      required: true,
    },
    endTime: {
      type: String,
      required: true,
      trim: true,
    },
    image: {
      type: String,
      trim: true,
    },
    location: [
      {
        name: {
          type: String,
          trim: true,
        },
        address: {
          type: String,
          trim: true,
        },
        suburb: {
          type: String,
          trim: true,
        },
        postcode: {
          type: String,
          trim: true,
        },
        country: {
          type: String,
          trim: true,
        },
        long: {
          type: String,
          trim: true,
        },
        lat: {
          type: String,
          trim: true,
        },
        url: {
          type: String,
          trim: true,
        },
      }
    ],
    description: {
      type: String,
      trim: true,
    },
    createdBy: [
      {
        type: Schema.Types.ObjectId,
        ref: 'User',
      },
    ],
  }
);

export default mongoose.models.Event || mongoose.model('Event', eventSchema)