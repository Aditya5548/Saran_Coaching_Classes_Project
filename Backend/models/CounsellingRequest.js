import mongoose from 'mongoose';

const counsellingRequestSchema = new mongoose.Schema(
  {
    studentName: { type: String, required: true, trim: true },
    parentName: { type: String, required: true, trim: true },
    phone: { type: String, required: true, trim: true },
    email: { type: String, trim: true, lowercase: true },
    classLevel: { type: String, required: true, trim: true },
    preferredDate: { type: String, trim: true },
    preferredTime: { type: String, trim: true },
    message: { type: String, trim: true },
  },
  { timestamps: true }
);

export default mongoose.model('CounsellingRequest', counsellingRequestSchema);
