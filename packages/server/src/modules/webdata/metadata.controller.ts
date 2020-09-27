import apicache from 'apicache';
import * as express from 'express';
import { Request, Response } from 'express';
import ogs from 'open-graph-scraper';
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
    if (!url) {
      res
        .status(400)
        .send('You have to provide a url (?u=)');
      return;
    }

    ogs({ url: url })
      .then((data: any) => {
        const { error, result, response } = data;

        if (error) {
          res
            .status(400)
            .json(error);
          return;
        }

        res.json(result)
      })
      .catch((err: any) => {
        console.log(err)
      })
  }
}
