import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response } from 'express';
import * as Woopra from 'woopra';

// Replace projectKey with your project key (generally your website name)
// `options` is an object, currently the only option supported is ssl: <true|false> (default: true)
var woopra = new Woopra('tools-api.cgeosoft.com', {
  ssl: true
});

@Injectable()
export class AnalyticsMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: Function) {
    // console.log(req.ip)
    woopra.identify(req.ip, {})
    woopra.track("pv", {
      url: req.url,
      params: JSON.stringify(req.params)
    })
    next();
  }
}
