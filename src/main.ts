import { NestFactory } from '@nestjs/core';
import {AppModule} from "./app.module";
import {ValidationPipe} from "@nestjs/common";
import {TokenExceptionsFilter} from "./app.exception";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe());
  app.useGlobalFilters(new TokenExceptionsFilter());

  app.enableCors();

  await app.listen(process.env.PORT);
}
bootstrap();
