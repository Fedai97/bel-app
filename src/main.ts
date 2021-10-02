import { NestFactory } from '@nestjs/core';
import { ConfigService } from "@nestjs/config";
import {AppModule} from "./app.module";
import {ValidationPipe} from "@nestjs/common";
import {TokenExceptionsFilter} from "./app.exception";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const configService = app.get(ConfigService);
  app.useGlobalPipes(new ValidationPipe());
  app.useGlobalFilters(new TokenExceptionsFilter());

  app.enableCors();

  await app.listen(configService.get('HTTP_PORT'));
}
bootstrap();
