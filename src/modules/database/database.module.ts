import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';
import loadConfig from 'src/config/configurations';

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [loadConfig],
      envFilePath: ['.env'],
    }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => {
        const { host, port, username, password, database } =
          configService.get('db');

        return {
          type: 'mariadb',
          // .env 获取
          host,
          port,
          username,
          password,
          logging: false,
          database,
          // entities
          entities: ['dist/**/*.entity{.ts,.js}'],
        };
      },
    }),
  ],
})
export class DatabaseModule {}
