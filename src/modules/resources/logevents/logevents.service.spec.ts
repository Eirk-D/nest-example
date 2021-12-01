import { Test, TestingModule } from '@nestjs/testing';
import { LogeventsService } from './logevents.service';

describe('LogeventsService', () => {
  let service: LogeventsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [LogeventsService],
    }).compile();

    service = module.get<LogeventsService>(LogeventsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
