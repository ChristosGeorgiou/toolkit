import { NestFactory } from "@nestjs/core";
import { DocumentBuilder, SwaggerModule } from "@nestjs/swagger";
import * as helmet from "helmet";
import { utilities as nestWinstonModuleUtilities, WinstonModule } from "nest-winston";
import * as winston from "winston";
import { AppModule } from "./app.module";

const transports = [
  new winston.transports.File({
    filename: './logs/combined.log',
    level: 'info'
  }),
  new winston.transports.File({
    filename: './logs/errors.log',
    level: 'error'
  }),
  new winston.transports.Console({
    format: winston.format.combine(
      winston.format.timestamp(),
      nestWinstonModuleUtilities.format.nestLike(),
    ),
  }),
]

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    logger: WinstonModule.createLogger({
      transports
    })
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
