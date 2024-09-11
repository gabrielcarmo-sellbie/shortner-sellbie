import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { configureSwagger } from './swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  configureSwagger(app);

  await app.listen(3000);
}
bootstrap();
