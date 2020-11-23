import { utilities as nestWinstonModuleUtilities, WinstonModule } from "nest-winston";
import * as winston from "winston";

export const logger = WinstonModule.createLogger({
  transports: [
    new winston.transports.File({
      filename: './logs/combined.jsonl',
      level: 'info'
    }),
    new winston.transports.File({
      filename: './logs/errors.jsonl',
      level: 'error'
    }),
    new winston.transports.Console({
      format: winston.format.combine(
        winston.format.timestamp(),
        nestWinstonModuleUtilities.format.nestLike(),
      ),
    }),
  ]
})
