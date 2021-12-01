import { Test, TestingModule } from '@nestjs/testing';
import { EventsdataController } from './eventsdata.controller';
import { EventsdataService } from './eventsdata.service';

describe('EventsdataController', () => {
  let controller: EventsdataController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [EventsdataController],
      providers: [EventsdataService],
    }).compile();

    controller = module.get<EventsdataController>(EventsdataController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
