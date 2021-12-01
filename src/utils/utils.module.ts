import { Module } from '@nestjs/common';
import { SwaggerService } from './swagger/swagger.service';

@Module({
  imports: [],
  providers: [SwaggerService],
})
export class UtilsModule {}
