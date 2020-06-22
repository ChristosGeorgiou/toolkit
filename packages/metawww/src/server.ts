import * as bodyParser from 'body-parser'
import { App } from './app'
import { MetadataController } from './controllers/metadata.controller'
import { ScreenshotsController } from './controllers/screenshots.controller'
import loggerMiddleware from './middleware/logger'

const app = new App({
    port: 3000,
    controllers: [
        new ScreenshotsController(),
        new MetadataController()
    ],
    middleWares: [
        bodyParser.json(),
        bodyParser.urlencoded({ extended: true }),
        loggerMiddleware
    ]
})

app.listen()
