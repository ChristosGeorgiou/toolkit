import { NestFactory } from "@nestjs/core";
import { DocumentBuilder, SwaggerModule } from "@nestjs/swagger";
import * as helmet from "helmet";
import { AppModule } from "./app.module";
import { logger } from "./middlewares/logger.middleware";

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    logger: logger
  });
  
  app.use(helmet());
  app.enableCors();
  app.setGlobalPrefix("v1");

  const options = new DocumentBuilder()
    .setTitle('Tools')
    .setVersion('0.1')
    .build();
  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('swagger', app, document);

  await app.listen(3000);
}
bootstrap();
