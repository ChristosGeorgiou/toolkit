import { Controller, Get } from "@nestjs/common";

const _start = new Date()

@Controller("health")
export class HealthController {
  @Get()
  getHealth(): any {
    return {
      start: _start,
      status: "RUNNING"
    };
  }
}
