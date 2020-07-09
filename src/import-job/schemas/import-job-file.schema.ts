import * as mongoose from 'mongoose';

export const ImportJobFileSchema = new mongoose.Schema({
  createdAt: { type: Date, default: Date.now },
  fileSize: Number,
  fileUrl: String,
});
