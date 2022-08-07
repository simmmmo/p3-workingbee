import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  firstName: {
    type: String,
    // required: [true, 'Please provide your first name.'],
    trim: true,
  },
  lastName: {
    type: String,
    // required: [true, 'Please provide your last name.'],
    trim: true,
  },
  phone: {
    type: String,
    // required: [true, 'Please provide your phone number.'],
    unique: true,
  },
  email: {
    type: String,
    // required: [true, 'Please provide your phone email.'],
    unique: true,
    match: [/.+@.+\..+/, "Must use a valid email address"],
  },
  description: {
    type: String,
    trim: true,
  },
  password: {
    type: String,
    // required: true,
    minlength: 5,
  },
});

export default mongoose.models.User || mongoose.model("User", userSchema);
