import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CoreModules } from './modules/core.module';
import { UtilsModule } from './utils/utils.module';

@Module({
  imports: [CoreModules, UtilsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
