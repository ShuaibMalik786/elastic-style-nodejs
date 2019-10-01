import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from './core/pipe/validation.pipe';
const device = require('express-device');

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe());
  app.enableCors();
  app.use(device.capture());

  await app.listen(process.env.PORT || 4000);
}
bootstrap();
