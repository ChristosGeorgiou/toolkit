import { CacheModule, MiddlewareConsumer, Module, NestModule } from "@nestjs/common";
import { APP_INTERCEPTOR } from "@nestjs/core";
import { GeoipController } from "./controllers/geoip.controller";
import { HealthController } from "./controllers/health.controller";
import { OgController } from "./controllers/og.controller";
import { ScreenshotsController } from "./controllers/screenshot.controller";
import { LoggingInterceptor } from "./interceptors/logging.interceptor";

@Module({
  imports: [
    CacheModule.register(),
  ],
  controllers: [
    GeoipController,
    OgController,
    ScreenshotsController,
    HealthController,
  ],
  providers: [
    {
      provide: APP_INTERCEPTOR,
      useClass: LoggingInterceptor,
    },],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    // consumer
    //   .apply(LoggerMiddleware)
    //   .forRoutes('/');
  }
}
