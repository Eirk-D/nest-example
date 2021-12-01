import { Module } from '@nestjs/common';
import { EventsdataService } from './eventsdata.service';
import { EventsdataController } from './eventsdata.controller';

@Module({
  controllers: [EventsdataController],
  providers: [EventsdataService]
})
export class EventsdataModule {}
