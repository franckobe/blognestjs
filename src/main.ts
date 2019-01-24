import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import {DocumentBuilder, SwaggerModule} from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const options = new DocumentBuilder()
        .setTitle('Blog Franck Garros')
        .setVersion('1.0')
        .addBearerAuth('Authorization', 'header')
        .build();
  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('/swagger', app, document);

  app.enableCors();
  await app.listen(3000);
}
bootstrap();
