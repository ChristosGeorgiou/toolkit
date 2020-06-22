import apicache from 'apicache';
import * as express from 'express';
import { Request, Response } from 'express';
import ogs from 'open-graph-scraper';
import env from '../enviroment';
import IControllerBase from '../interfaces/IControllerBase.interface';

const CACHE_MINUTES = process.env.CACHE || 30

export class MetadataController implements IControllerBase {
    public path = '/metadata'
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
        const timerStart = Date.now()
        ogs({ url: url })
            .then((data: any) => {
                const timerEnd = Date.now()
                const { error, result, response } = data;
                let image = ""
                if (result.ogImage.length) {
                    image = result.ogImage[0].url.indexOf("http") === -1
                        ? `${result.requestUrl}${result.ogImage[0].url}`
                        : result.ogImage[0].url
                }
                res.json({
                    url: result.requestUrl,
                    responseTime: timerEnd - timerStart,
                    title: result.ogTitle,
                    description: result.ogDescription,
                    image,
                    screenshot: `${env.RUNNING_URL}/api/screenshots?u=${url}`
                })
            })
            .catch((err: any) => {
                console.log(err)
            })
    }
}
