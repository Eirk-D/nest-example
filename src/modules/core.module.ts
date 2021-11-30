import { Module } from '@nestjs/common';
import { LogsModule } from './logs/logs.module';

@Module({
  imports: [LogsModule],
})
export class CoreModules {}
