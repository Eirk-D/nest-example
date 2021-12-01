import { Test, TestingModule } from '@nestjs/testing';
import { EventsdataService } from './eventsdata.service';

describe('EventsdataService', () => {
  let service: EventsdataService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [EventsdataService],
    }).compile();

    service = module.get<EventsdataService>(EventsdataService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
