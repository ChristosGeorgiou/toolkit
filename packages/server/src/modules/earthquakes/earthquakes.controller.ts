import apicache from 'apicache';
import * as express from 'express';
import { Request, Response } from 'express';
import IControllerBase from '../../interfaces/IControllerBase.interface';

const CACHE_MINUTES = process.env.CACHE || 30

export class EarthquakesController implements IControllerBase {
    public path = '/earthquakes'
    public router = express.Router()

    constructor() {
        this.initRoutes()
    }

    public initRoutes() {
        this.router.get(
            this.path,
            apicache.middleware('5 minutes'),
            this.index)
    }

    index = async (req: Request, res: Response) => {
        const timerStart = Date.now()
        res.json({
          timerStart
        })
    }
}
