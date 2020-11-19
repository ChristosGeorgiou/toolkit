import { BadRequestException, CacheInterceptor, Controller, Get, Header, Query, Res, UseInterceptors } from "@nestjs/common";
import * as captureWebsite from "capture-website";
import { Readable } from "stream";

@Controller("screenshot")
@UseInterceptors(CacheInterceptor)
export class ScreenshotsController {
  @Get()
  @Header("Content-Type", "image/jpg")
  async getMetadata(@Query("url") url: string, @Res() res) {
    if (!url)
      throw new BadRequestException("You have to provide a url (?url=)");

    const buffer = await captureWebsite.buffer(decodeURI(url), {
      delay: 3,
      type: "jpeg",
      launchOptions: {
        args: ["--no-sandbox", "--disable-setuid-sandbox"],
      },
    });

    const stream = this.getReadableStream(buffer);
    stream.pipe(res);
  }

  getReadableStream(buffer: Buffer): Readable {
    const stream = new Readable();

    stream.push(buffer);
    stream.push(null);

    return stream;
  }
}
