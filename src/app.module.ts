import { GoogleAuthService } from '@/infra/google-auth.service';
import { PrismaService } from '@infra/prisma.service';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [ConfigModule.forRoot()],
  controllers: [AppController],
  providers: [AppService, PrismaService, GoogleAuthService],
})
export class AppModule {}
