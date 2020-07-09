import { Test, TestingModule } from '@nestjs/testing';
import { ImportJobFileService } from './import-job-file.service';

describe('ImportJobFileService', () => {
  let service: ImportJobFileService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ImportJobFileService],
    }).compile();

    service = module.get<ImportJobFileService>(ImportJobFileService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
