import { Test, TestingModule } from '@nestjs/testing';
import { FacilityResolver } from './facility.resolver';
import { FacilityService } from './facility.service';

describe('FacilityResolver', () => {
  let resolver: FacilityResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FacilityResolver, FacilityService],
    }).compile();

    resolver = module.get<FacilityResolver>(FacilityResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
