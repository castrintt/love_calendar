import { NestFactory } from '@nestjs/core';
import { Module, ValidationPipe } from '@nestjs/common';
import { EventModule } from './event/event.module';
import { MessageModule } from './message/message.module';
import { UserModule } from './user/user.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { PrismaModule } from './prisma/prisma.module';

@Module({
  imports: [EventModule, MessageModule, UserModule, PrismaModule],
})
export class BaseModule { }

async function bootstrap() {
  const app = await NestFactory.create(BaseModule, { cors: true });

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
      transform: true,
    }),
  );

  const config = new DocumentBuilder()
    .setTitle('Love Calendar')
    .setVersion('1.0')
    .addBearerAuth()
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api/docs', app, document);

  const port = process.env.PORT || 3000;
  await app.listen(port);
  console.log(`🚀 NestJS Server started on port ${port}!`);

}
bootstrap();
