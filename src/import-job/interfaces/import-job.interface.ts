import { Document, Types } from 'mongoose';

export interface ImportJob extends Document {
  createdAt: Date;
  files: Types.ObjectId[];
}
