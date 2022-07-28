import { Schema, model, models } from 'mongoose';

const testCategorySchema = new Schema({
  categoryName: {
    type: String,
  },
});

const TestCategory = models.Test || model('TestCategory', testCategorySchema);

export default TestCategory;