import apicache from 'apicache';
import captureWebsite from 'capture-website';
import crypto from 'crypto';
import * as express from 'express';
import { Request, Response } from 'express';
import ogs from 'open-graph-scraper';
import path from 'path';
import IControllerBase from '../../interfaces/IControllerBase.interface';

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

        const hash = crypto.createHash('sha256').update(url, 'utf8').digest('hex');
        console.log(hash)
        const date = Math.round((new Date()).getTime() / (30 * 60 * 1000))
        const filename = `${hash}.${date}.jpg`
        const file = path.join(__dirname, `../../../data/screenshots/${filename}`)

        const sc = await captureWebsite.file(url, file, {
            delay: 3,
            overwrite: true,
            launchOptions: {
                args: [
                    '--no-sandbox',
                    '--disable-setuid-sandbox'
                ]
            }
        })
        // , {
        //     renderDelay: 1 * 1000,
        //     shotSize: {
        //         height: 'all'
        //     },
        //     format: "jpg",
        //     quality: 50,
        // })

        console.log(sc)

        const timerStart = Date.now()
        ogs({ url: url }).then((data: any) => {
            const timerEnd = Date.now()
            const { error, result, response } = data;
            res.json({
                url: result.requestUrl,
                responseTime: timerEnd - timerStart,
                title: result.ogTitle,
                description: result.ogDescription,
                image: result.ogImage[0].url,
                screenshot: `/screenshots/${filename}`
            })
        })
    }
}
