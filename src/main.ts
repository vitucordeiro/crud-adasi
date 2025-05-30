import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const configService = app.get(ConfigService);
  const port = configService.get<number>('port') || 3000;
  
  
  const config = new DocumentBuilder()
    .setTitle(configService.get<string>('swagger.title') || 'API - ADASI')
    .setDescription(configService.get<string>('swagger.description') || 'API para gerenciamento de pessoas e cidades')
    .setVersion(configService.get<string>('swagger.version') || '1.0')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup(configService.get<string>('swagger.path') || 'api', app, document);
  
  await app.listen(port);
  console.log(`Application is running on: http://localhost:${port}`);
  console.log(`Swagger documentation is available at: http://localhost:${port}/${configService.get<string>('swagger.path') || 'api'}`);
}

bootstrap();
