import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { ImportJob } from './interfaces/import-job.interface';
import { Model } from 'mongoose';
import { ImportJobDto } from './dto/import-job.dto';
import { RuntimeException } from '@nestjs/core/errors/exceptions/runtime.exception';
import { ImportJobFileService } from './import-job-file.service';
import { FileStorageService } from '../file-storage/file-storage.service';

@Injectable()
export class ImportJobService {
  constructor(
    @InjectModel('ImportJob') private readonly importJobModel: Model<ImportJob>,
    private readonly importJobFileService: ImportJobFileService,
    private readonly fileStorageService: FileStorageService,
  ) {}

  async handleUpload(files) {
    try {
      const createdImportJobFiles = [];
      for (const file of files) {
        const etag = await this.fileStorageService.uploadFile(file);
        console.log(etag);
        createdImportJobFiles.push(
          await this.importJobFileService.create({
            fileName: file.originalname,
            fileSize: file.size,
            fileUrl: '',
          }),
        );
      }
      return this.create({
        files: createdImportJobFiles.map(importJobFile => importJobFile._id),
      });
    } catch (e) {
      throw new RuntimeException(e);
    }
  }

  create(importJob: ImportJobDto) {
    const createdImportJob = new this.importJobModel(importJob);
    return createdImportJob.save();
  }

  async findAll() {
    return this.importJobModel.find().exec();
  }
}
