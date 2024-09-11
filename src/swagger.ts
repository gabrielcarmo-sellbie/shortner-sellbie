import { INestApplication } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { getAppVersion } from './utils';

const SWAGGER_PATH = 'swagger';

export function configureSwagger(app: INestApplication) {
  const appVersion = getAppVersion();

  const options = new DocumentBuilder()
    .setTitle('Sellbie Shortner API')
    .setDescription('The Sellbie Shortner API ')
    .setVersion(appVersion)
    .build();

  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup(SWAGGER_PATH, app, document);
}
