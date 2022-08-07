import mongoose from "mongoose";

// const User = require('./User');
// const Category = require('./Category');

const eventSchema = new mongoose.Schema({
  title: {
    type: String,
    trim: true,
  },
  subTitle: {
    type: String,
    trim: true,
  },
  organisationName: {
    type: String,
    trim: true,
  },
  category: {
    type: String,
    trim: true,
  },
  // category: {
  // type: mongoose.Schema.Types.ObjectId,
  //  ref: 'Category',
  //  required: true,
  // },
  date: {
    type: String,
  },
  startTime: {
    type: String,
  },
  endTime: {
    type: String,
    trim: true,
  },
  eventImage: {
    type: String,
    trim: true,
  },
  locationName: {
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
  state: {
    type: String,
    trim: true,
  },
  postcode: {
    type: String,
    trim: true,
  },
  lat: {
    type: Number,
    trim: true,
  },
  long: {
    type: Number,
    trim: true,
  },
  link: {
    type: String,
    trim: true,
  },
  description: {
    type: String,
    trim: true,
  },
  createdBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
});

export default mongoose.models.Event || mongoose.model("Event", eventSchema);
