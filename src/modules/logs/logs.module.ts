import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { NestLogsModule } from 'nest-logs';
import { LogsMiddleware } from './logs.middleware';

@Module({
  imports: [NestLogsModule],
  controllers: [],
  providers: [],
})
export class LogsModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LogsMiddleware).forRoutes('*');
  }
}
