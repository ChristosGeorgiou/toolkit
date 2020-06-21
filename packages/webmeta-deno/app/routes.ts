import { Router } from 'https://deno.land/x/oak/mod.ts';

const router = new Router()
router
    .post('/fetch', (context) => {
        context.response.body = "Hello world!";
    })

export default router