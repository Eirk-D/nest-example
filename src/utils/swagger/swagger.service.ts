import { INestApplication, Injectable } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

@Injectable()
export class SwaggerService {
  static setupSwagger(app: INestApplication) {
    const config = new DocumentBuilder()
      .addBearerAuth()
      .setTitle('My Doc') // 标题
      .setDescription('my api doc') // 描述
      .setVersion('1.0') // 版本
      .build();
    const document = SwaggerModule.createDocument(app, config);
    SwaggerModule.setup('docs', app, document, {
      swaggerOptions: {
        persistAuthorization: true,
      },
    });
  }
}
