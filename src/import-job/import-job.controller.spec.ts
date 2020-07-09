import { Test, TestingModule } from '@nestjs/testing';
import { ImportJobController } from './import-job.controller';

describe('ImportJob Controller', () => {
  let controller: ImportJobController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ImportJobController],
    }).compile();

    controller = module.get<ImportJobController>(ImportJobController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
