import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerService } from './utils/swagger/swagger.service';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  SwaggerService.setupSwagger(app);
  const env = process.env;
  const appPort =
    env.NODE_ENV == 'macdev' ? env.APP_LISTEN_PORT_MAC : env.APP_LISTEN_PORT;
  await app.listen(appPort);
}
bootstrap();
