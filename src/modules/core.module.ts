import { Module } from '@nestjs/common';
import { DatabaseModule } from './database/database.module';
import { LogsModule } from './logs/logs.module';
import { ResourcesModule } from './resources/resources.module';

@Module({
  imports: [LogsModule, DatabaseModule, ResourcesModule],
})
export class CoreModules {}
