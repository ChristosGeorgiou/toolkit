import * as bodyParser from 'body-parser'
import { App } from './app'
import { HomeController } from './controllers/home/home.controller'
import { PostsController } from './controllers/posts/posts.controller'
import loggerMiddleware from './middleware/logger'

const app = new App({
    port: 3000,
    controllers: [
        new HomeController(),
        new PostsController()
    ],
    middleWares: [
        bodyParser.json(),
        bodyParser.urlencoded({ extended: true }),
        loggerMiddleware
    ]
})

app.listen()
