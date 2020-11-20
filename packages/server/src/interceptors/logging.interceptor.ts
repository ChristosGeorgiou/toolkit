import { CallHandler, ExecutionContext, Injectable, NestInterceptor } from '@nestjs/common';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { logger } from 'src/middlewares/logger.middleware';

@Injectable()
export class LoggingInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {

    const request = context.switchToHttp().getRequest<Request>();

    logger.log({
      url: request.url,
      headers: request.headers,
      method: request.method
    }, "LoggingInterceptor");

    return next
      .handle()
      .pipe(
        tap(() => {
          const response = context.switchToHttp().getResponse<Response>();
          logger.log({
            statusCode: response.status,
            body:response.body
          }, "LoggingInterceptor")
        })
      );
  }
}
