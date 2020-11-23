import { NestFactory } from '@nestjs/core';
import { ExpressAdapter } from '@nestjs/platform-express';
import { APIGatewayProxyHandler } from 'aws-lambda';
import * as awsServerlessExpress from 'aws-serverless-express';
import * as express from 'express';
import { Server } from 'http';
import { AppModule } from './app.module';

let cachedServer: Server;

const bootstrapServer = async (): Promise<Server> => {
  const expressApp = express();
  const adapter = new ExpressAdapter(expressApp);
  
  const app = await NestFactory.create(AppModule, adapter);
  
  app.enableCors();
  app.setGlobalPrefix("v1");

  await app.init();
  return awsServerlessExpress.createServer(expressApp);
}

export const handler: APIGatewayProxyHandler = async (event, context) => {
  if (!cachedServer) {
    cachedServer = await bootstrapServer()
  }
  return awsServerlessExpress.proxy(cachedServer, event, context, 'PROMISE')
      .promise;
};
