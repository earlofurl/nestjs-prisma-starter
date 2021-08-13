import { Test, TestingModule } from '@nestjs/testing';
import { LabtestResolver } from './labtest.resolver';
import { LabtestService } from './labtest.service';

describe('LabtestResolver', () => {
  let resolver: LabtestResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [LabtestResolver, LabtestService],
    }).compile();

    resolver = module.get<LabtestResolver>(LabtestResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
