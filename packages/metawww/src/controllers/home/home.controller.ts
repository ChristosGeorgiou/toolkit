import * as express from 'express'
import { Request, Response } from 'express'
import path from 'path'
import IControllerBase from '../../interfaces/IControllerBase.interface'

export class HomeController implements IControllerBase {
    public path = '/'
    public router = express.Router()

    constructor() {
        this.initRoutes()
    }

    public initRoutes() {
        this.router.get('/', this.index)
    }

    index = (req: Request, res: Response) => {

        const users = [
            {
                id: 1,
                name: 'Ali'
            },
            {
                id: 2,
                name: 'Can'
            },
            {
                id: 3,
                name: 'Ahmet'
            }
        ]

        // res.render('home/index', { users })
        res.sendFile(path.join(__dirname + '../../../../public/index.html'));
    }
}
