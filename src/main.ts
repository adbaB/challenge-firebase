import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import {
  ExpressAdapter,
  NestExpressApplication,
} from '@nestjs/platform-express';
import {DocumentBuilder, SwaggerModule} from '@nestjs/swagger'
import { useContainer } from 'class-validator';
import * as express from 'express';
import * as functions from 'firebase-functions';

import { AppModule } from './app.module';
import { onCreateCustomer } from './infrastructure/customer/events/onCreate-customer';
import { onUpdateCustomer } from './infrastructure/customer/events/onUpdate-customer';
import { onCreate } from './infrastructure/user/events/onEvent';

const server: express.Express = express();

export const createNestServer = async (
  expressInstance: express.Express,
): Promise<NestExpressApplication> => {
  const adapter: ExpressAdapter = new ExpressAdapter(expressInstance);
  const app: NestExpressApplication =
    await NestFactory.create<NestExpressApplication>(AppModule, adapter, {});
  app.useGlobalPipes(new ValidationPipe());

  useContainer(app.select(AppModule), { fallbackOnErrors: true });

  app.enableCors();
  
  const config = new DocumentBuilder()
    .setTitle('Challenge GeeksClastle')
    .setDescription('API description')
    .setVersion('1.0')
    .addTag('firebase')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('doc', app, document);

  return app.init();
};

createNestServer(server)
  .then((v) => {})
  .catch((err) => console.error('Nest broken', err));

export const api: functions.HttpsFunction = functions.https.onRequest(server);
export const create = onCreate
export const createCustomer = onCreateCustomer
export const updateCustomer = onUpdateCustomer