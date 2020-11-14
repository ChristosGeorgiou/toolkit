import apicache from 'apicache';
import captureWebsite from 'capture-website';
import * as express from 'express';
import { Request, Response } from 'express';
import IControllerBase from '../../interfaces/IControllerBase.interface';

const CACHE_MINUTES = process.env.CACHE || 30

export class ScreenshotsController implements IControllerBase {
    public path = '/screenshots'
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
        const url = req.query.u as string
        if (!url) {
          res
            .status(400)
            .send('You have to provide a url (?u=)');
          return;
        }
        const screenshot = await captureWebsite.buffer(url, {
            delay: 3,
            launchOptions: {
                args: [
                    '--no-sandbox',
                    '--disable-setuid-sandbox'
                ]
            }
        })
        res.contentType('jpeg')
        res.end(screenshot);
    }
}
