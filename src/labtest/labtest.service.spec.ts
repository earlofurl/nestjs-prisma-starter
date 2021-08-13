import { Test, TestingModule } from '@nestjs/testing';
import { LabtestService } from './labtest.service';

describe('LabtestService', () => {
  let service: LabtestService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [LabtestService],
    }).compile();

    service = module.get<LabtestService>(LabtestService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
