import mongoose from 'mongoose'

const categorySchema = new mongoose.Schema({
    title: {
      type: String,
    },
    defaultImage: {
      type: String,
    },
  }
);

export default mongoose.models.Category || mongoose.model('Category', categorySchema)