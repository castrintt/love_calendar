import { NestFactory } from '@nestjs/core';
import { Module } from '@nestjs/common';
import { EventModule } from './event/event.module';
import { MessageModule } from './message/message.module';
import { UserModule } from './user/user.module';

@Module({
  imports: [EventModule, MessageModule, UserModule],
})
export class BaseModule { }

async function bootstrap() {
  const app = await NestFactory.create(BaseModule);
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
