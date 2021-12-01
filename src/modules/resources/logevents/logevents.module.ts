import { Module } from '@nestjs/common';
import { LogeventsService } from './logevents.service';
import { LogeventsController } from './logevents.controller';

@Module({
  controllers: [LogeventsController],
  providers: [LogeventsService]
})
export class LogeventsModule {}
