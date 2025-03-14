import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger } from '@nestjs/common';
import { ExpressAdapter } from '@nestjs/platform-express';
import * as express from 'express';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(process.env.PORT ?? 3000);

  // Obtener rutas de manera segura
  const httpAdapter = app.getHttpAdapter();
  if (httpAdapter instanceof ExpressAdapter) {
    const expressApp = httpAdapter.getInstance() as express.Express;
    const availableRoutes = expressApp._router?.stack
      .filter((layer) => layer.route)
      .map((layer) => ({
        method: Object.keys(layer.route.methods)[0]?.toUpperCase(),
        path: layer.route.path,
      })) ?? [];

    Logger.log(`🚀 Rutas registradas: ${JSON.stringify(availableRoutes, null, 2)}`);
  } else {
    Logger.warn('⚠️ No se pudieron obtener las rutas porque el adaptador HTTP no es Express.');
  }
}

bootstrap();

