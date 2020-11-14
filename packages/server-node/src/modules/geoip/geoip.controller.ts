import apicache from 'apicache';
import * as express from 'express';
import { Request, Response } from 'express';
import { lookup } from 'geoip-lite';
import IControllerBase from '../../interfaces/IControllerBase.interface';

const CACHE_MINUTES = process.env.CACHE || 30

export class GeoIpController implements IControllerBase {
  public path = '/geoip'
  public router = express.Router()

  constructor() {
    this.initRoutes()
  }

  public initRoutes() {
    this.router.get(this.path, apicache.middleware('5 minutes'), this.index)
  }

  index = async (req: Request, res: Response) => {
    let ip = req.connection.remoteAddress
    console.log(ip)
    ip="79.107.82.183"
    if (!ip)
      return res.status(400).send("Could not detect IP")

    var geo = lookup(ip);
    res.json(geo)
  }
}
