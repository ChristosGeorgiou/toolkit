import { Context, send } from "https://deno.land/x/oak/mod.ts";

export async function storage(ctx: Context) {
    await send(ctx, ctx.request.url.pathname, {        
        root: `${Deno.cwd()}/storage`,
    });
}