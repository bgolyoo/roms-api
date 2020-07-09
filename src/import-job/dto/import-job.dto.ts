import { Types } from 'mongoose';

export class ImportJobDto {
  readonly files: Types.ObjectId[];
}
