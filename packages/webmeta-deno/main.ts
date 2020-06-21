import { config } from "https://deno.land/x/dotenv/mod.ts";
import { Application } from 'https://deno.land/x/oak/mod.ts';
import router from './app/routes.ts';

const env = config()
const app = new Application()

app.use(router.routes())
app.use(router.allowedMethods())

console.log(`Listening on port ${env.PORT} ...`)
await app.listen(`${env.HOST}:${env.PORT}`)
