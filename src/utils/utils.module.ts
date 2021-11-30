import { Module } from '@nestjs/common';
import { SwaggerService } from './swagger/swagger.service';

@Module({
  providers: [SwaggerService],
})
export class UtilsModule {}
