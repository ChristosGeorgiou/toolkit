import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GeoipModule } from './geoip/geoip.module';

@Module({
  imports: [GeoipModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
