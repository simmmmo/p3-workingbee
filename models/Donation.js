import mongoose from "mongoose";

const donationSchema = new mongoose.Schema({
  taskId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Task",
  },
  userId: {
    type: String,
  },
  donationHours: {
    type: Number,
  },
  eventId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Event",
  },
});

export default mongoose.models.Donation ||
  mongoose.model("Donation", donationSchema);
