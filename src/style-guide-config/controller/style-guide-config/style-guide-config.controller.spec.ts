import { Test, TestingModule } from '@nestjs/testing';
import { StyleGuideConfigController } from './style-guide-config.controller';

describe('StyleGuideConfig Controller', () => {
  let controller: StyleGuideConfigController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [StyleGuideConfigController],
    }).compile();

    controller = module.get<StyleGuideConfigController>(StyleGuideConfigController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
