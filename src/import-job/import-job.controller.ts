import {
  Controller,
  Get,
  Post,
  UploadedFiles,
  UseInterceptors,
} from '@nestjs/common';
import { FilesInterceptor } from '@nestjs/platform-express';
import { ImportJobService } from './import-job.service';

@Controller('import-job')
export class ImportJobController {
  constructor(private readonly importJobService: ImportJobService) {}

  @Post('upload')
  @UseInterceptors(FilesInterceptor('files'))
  uploadFile(@UploadedFiles() files) {
    return this.importJobService.handleUpload(files);
  }

  @Get()
  getAll() {
    return this.importJobService.findAll();
  }
}
