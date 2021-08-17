import { Test, TestingModule } from '@nestjs/testing';
import { LineitemResolver } from './lineitem.resolver';
import { LineitemService } from './lineitem.service';

describe('LineitemResolver', () => {
  let resolver: LineitemResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [LineitemResolver, LineitemService],
    }).compile();

    resolver = module.get<LineitemResolver>(LineitemResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
