import { Injectable } from '@nestjs/common';
import { MinioService } from 'nestjs-minio-client';

@Injectable()
export class FileStorageService {
  constructor(private readonly minioClient: MinioService) {}

  async uploadFile(file) {
    const bucketName = 'my-bucket';
    const exists = await this.minioClient.client.bucketExists(bucketName);
    if (exists) {
      return this.minioClient.client.putObject(
        bucketName,
        file.originalname,
        file.buffer,
      );
    } else {
      await this.minioClient.client.makeBucket(bucketName, 'us-east-1');
      return this.minioClient.client.putObject(
        bucketName,
        file.originalname,
        file.buffer,
      );
    }
  }
}
