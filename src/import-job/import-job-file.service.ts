import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Types } from 'mongoose';
import { ImportJobFile } from './interfaces/import-job-file.interface';
import { ImportJobFileDto } from './dto/import-job-file.dto';

@Injectable()
export class ImportJobFileService {
  constructor(
    @InjectModel('ImportJobFile')
    private readonly importJobFileModel: Model<ImportJobFile>,
  ) {}

  create(importJobFile: ImportJobFileDto) {
    const createdImportJob = new this.importJobFileModel(importJobFile);
    return createdImportJob.save();
  }

  findAll() {
    return this.importJobFileModel.find().exec();
  }

  find(fileId: Types.ObjectId) {
    return this.importJobFileModel.find(fileId);
  }
}
