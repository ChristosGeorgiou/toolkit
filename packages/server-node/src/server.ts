import * as bodyParser from 'body-parser'
import { App } from './app'
import loggerMiddleware from './middleware/logger'
import { EarthquakesController } from './modules/earthquakes/earthquakes.controller'
import { GeoIpController } from './modules/geoip/geoip.controller'
import { MetadataController } from './modules/webdata/metadata.controller'
import { ScreenshotsController } from './modules/webdata/screenshots.controller'

const app = new App({
  port: 3000,
  controllers: [
    new EarthquakesController(),
    new ScreenshotsController(),
    new MetadataController(),
    new GeoIpController()
  ],
  middleWares: [
    bodyParser.json(),
    bodyParser.urlencoded({ extended: true }),
    loggerMiddleware
  ]
})

app.listen()
