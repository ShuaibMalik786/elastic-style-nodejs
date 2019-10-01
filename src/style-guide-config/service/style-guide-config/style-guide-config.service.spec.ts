import { Test, TestingModule } from '@nestjs/testing';
import { StyleGuideConfigService } from './style-guide-config.service';

describe('StyleGuideConfigService', () => {
  let service: StyleGuideConfigService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [StyleGuideConfigService],
    }).compile();

    service = module.get<StyleGuideConfigService>(StyleGuideConfigService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
