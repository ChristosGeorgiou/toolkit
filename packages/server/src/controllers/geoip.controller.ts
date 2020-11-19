import { BadRequestException, Controller, Get, Ip } from "@nestjs/common";
import { lookup } from "geoip-lite";

@Controller("geoip")
export class GeoipController {
  @Get()
  getHello(@Ip() ip: string): any {
    if (!ip) throw new BadRequestException();

    return {
      ip,
      geo: lookup(ip),
    };
  }
}
