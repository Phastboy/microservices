import { NestFactory } from '@nestjs/core';
import { ConsoleLogger, Logger } from '@nestjs/common';
import { networkInterfaces } from 'os';
import { AppModule } from './app.module';

async function bootstrap() {
  const logger = new Logger('Bootstrap');
  const port = process.env.PORT ?? 3000;

  const app = await NestFactory.create(AppModule, {
    logger: new ConsoleLogger({
      json: true,
      colors: true,
    }),
  });

  const networkAddress = (): string | null => {
    return (
      Object.values(networkInterfaces())
        .flat()
        .find((info) => info?.family === 'IPv4' && !info.internal)?.address ??
      null
    );
  };

  await app.listen(port);
  logger.log(`Network -> ${networkAddress()}:${port}`);
}
bootstrap();
