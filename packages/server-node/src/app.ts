import express from "express";

export class App {
  public app: any
  public port: number

  constructor(appInit: { port: number; middleWares: any; controllers: any; }) {
    this.app = express()
    this.port = appInit.port

    this.middlewares(appInit.middleWares)
    this.routes(appInit.controllers)
    this.assets()
    this.template()
  }

  private middlewares(middleWares: { forEach: (arg0: (middleWare: any) => void) => void; }) {
    middleWares.forEach(middleWare => {
      this.app.use(middleWare)
    })
  }

  private routes(controllers: { forEach: (arg0: (controller: any) => void) => void; }) {
    controllers.forEach(controller => {
      console.log(`Load controller: ${controller.path}`)
      this.app.use('/api', controller.router)
    })
  }

  private assets() {
    this.app.use("/storage", express.static('storage'))
  }

  private template() {
    this.app.set('view engine', 'html')
  }

  public listen() {
    this.app.listen(this.port, () => {
      console.log(`App listening on the http://localhost:${this.port}`)
    })
  }
}
