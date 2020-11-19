import { CacheModule, MiddlewareConsumer, Module, NestModule } from "@nestjs/common";
import { GeoipController } from "./controllers/geoip.controller";
import { HealthController } from "./controllers/health.controller";
import { OgController } from "./controllers/og.controller";
import { ScreenshotsController } from "./controllers/screenshot.controller";
import { AnalyticsMiddleware } from "./middlewares/analytics.middleware";

@Module({
  imports: [CacheModule.register()],
  controllers: [
    GeoipController,
    OgController,
    ScreenshotsController,
    HealthController
  ],
  providers: [],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(AnalyticsMiddleware)
      .forRoutes("/");
  }
}
