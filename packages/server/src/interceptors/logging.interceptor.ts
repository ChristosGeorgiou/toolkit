import { CallHandler, ExecutionContext, Injectable, NestInterceptor } from '@nestjs/common';
import * as cuid from 'cuid';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { logger } from 'src/middlewares/logger.middleware';

@Injectable()
export class LoggingInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    
    const ctx = context.switchToHttp()
    const uid =  cuid()

    const request = ctx.getRequest<Request>();
    
    logger.log({
      uid,
      url: request.url,
      headers: request.headers,
      method: request.method,
    }, "ReqRes:Request");

    return next
      .handle()
      .pipe(
        tap((body) => {
          const response = ctx.getResponse();
          logger.log({
            uid,
            statusCode: response.statusCode,
            body,
          }, "ReqRes:Response")
        })
      );
  }
}
