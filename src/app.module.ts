import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { ImportJobModule } from './import-job/import-job.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost/nest'),
    ImportJobModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
