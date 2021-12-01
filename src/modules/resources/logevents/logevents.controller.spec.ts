import { Test, TestingModule } from '@nestjs/testing';
import { LogeventsController } from './logevents.controller';
import { LogeventsService } from './logevents.service';

describe('LogeventsController', () => {
  let controller: LogeventsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [LogeventsController],
      providers: [LogeventsService],
    }).compile();

    controller = module.get<LogeventsController>(LogeventsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
