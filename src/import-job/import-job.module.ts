import { Module } from '@nestjs/common';
import { ImportJobController } from './import-job.controller';
import { ImportJobFileSchema } from './schemas/import-job-file.schema';
import { MongooseModule } from '@nestjs/mongoose';
import { ImportJobService } from './import-job.service';
import { ImportJobFileService } from './import-job-file.service';
import { ImportJobSchema } from './schemas/import-job.schema';
import { FileStorageModule } from '../file-storage/file-storage.module';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: 'ImportJobFile', schema: ImportJobFileSchema },
      { name: 'ImportJob', schema: ImportJobSchema },
    ]),
    FileStorageModule,
  ],
  controllers: [ImportJobController],
  providers: [ImportJobService, ImportJobFileService],
})
export class ImportJobModule {}
