import { Controller, Get } from '@nestjs/common';
import { Logger, NestLogger } from 'nest-logs';
import { AppService } from './app.service';

@NestLogger()
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    // Logger.info('测试代码');
    return this.appService.getHello();
  }
}
