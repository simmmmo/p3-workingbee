const { Schema, model } = require('mongoose');


const locationSchema = new Schema(
  {
    locationName: {
      type: String,
      trim: true,
    },
    locationAddress1: {
      type: String,
      trim: true,
    },
    locationAddress2: {
      type: String,
      trim: true,
    },
    locationAddress3: {
      type: String,
      trim: true,
    },
    locationSuburb: {
      type: String,
      trim: true,
    },
    locationCountry: {
      type: String,
      trim: true,
    },
    locationLong: {
      type: String,
      trim: true,
    },
    locationLat: {
      type: String,
      trim: true,
    },
    locationLink: {
      type: String,
      trim: true,
    },
  }
);

const eventSchema = new Schema(
  {
    eventTitle: {
      type: String,
      required: true,
      trim: true,
    },
    eventSubTitle: {
      type: String,
      trim: true,
    },
    eventCategory: {
      type: Schema.Types.ObjectId,
      ref: 'Category',
      required: true,
    },
    eventDate: {
      type: Date,
      default: Date.now,
      // get: (timestamp) => dateFormat(timestamp),
    },
    eventStartTime: {
      type: String,
      required: true,
    },
    eventEndTime: {
      type: String,
      required: true,
      trim: true,
    },
    eventImage: {
      type: String,
      trim: true,
    },
    eventLocation: [locationSchema],
    eventDescription: {
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

const Event = model('Event', eventSchema);

module.exports = Event;