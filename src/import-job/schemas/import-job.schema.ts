import * as mongoose from 'mongoose';
import { Types } from 'mongoose';

export const ImportJobSchema = new mongoose.Schema({
  createdAt: { type: Date, default: Date.now },
  files: [Types.ObjectId],
});
