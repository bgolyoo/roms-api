import { Document } from 'mongoose';

export interface ImportJobFile extends Document {
  readonly createdAt: Date;
  readonly fileName: string;
  readonly fileSize: number;
  readonly fileUrl: string;
}
