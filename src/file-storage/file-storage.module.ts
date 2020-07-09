import { Module } from '@nestjs/common';
import { FileStorageService } from './file-storage.service';
import { MinioModule } from 'nestjs-minio-client';

@Module({
  imports: [
    MinioModule.register({
      endPoint: '127.0.0.1',
      port: 9000,
      useSSL: false,
      accessKey: 'minio',
      secretKey: 'minio123',
    }),
  ],
  providers: [FileStorageService],
  exports: [FileStorageService],
})
export class FileStorageModule {}
