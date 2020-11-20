import { CacheModule, Module } from "@nestjs/common";
import { GeoipController } from "./controllers/geoip.controller";
import { HealthController } from "./controllers/health.controller";
import { OgController } from "./controllers/og.controller";
import { ScreenshotsController } from "./controllers/screenshot.controller";

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
  providers: [],
})
export class AppModule { }
