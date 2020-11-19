import { BadRequestException, Controller, Get, Query } from "@nestjs/common";
import * as ogs from "open-graph-scraper";

@Controller("og")
export class OgController {
  @Get()
  async getMetadata(@Query("url") url: string) {
    if (!url)
      throw new BadRequestException("You have to provide a url (?url=)");

    const { error, result } = await ogs({ url: decodeURI(url) });

    if (error) {
      throw new BadRequestException(error);
    }

    return {
      title: result.ogTitle,
      type: result.ogType,
      url: result.ogUrl,
      description: result.ogDescription,
      image: result.ogImage ? result.ogImage[0].url : null,
    };
  }
}
