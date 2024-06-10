import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import * as cookieParser from 'cookie-parser';
import * as csurf from 'csurf';
import { Request } from 'express';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe({ whitelist: true }));
  app.enableCors({
    credentials: true,
    origin: ['http://localhost:3000'],
  });
  app.use(cookieParser());
  app.use(
    csurf({
      cookie: {
        httpOnly: true,
        sameSite: 'none',
        // secure: process.env.NODE_ENV === 'production',
        secure: false, // for development
      },
      value: (req: Request) => {
        const token = req.cookies['csrf-token'];
        return token;
      },
    }),
  );
  await app.listen(process.env.PORT || 3005);
}
bootstrap();
