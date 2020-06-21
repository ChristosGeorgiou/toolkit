# Webshots

````warning
WARNING: THIS PROJECT IS UNDER DEVELOPMENT. PLEASE DO NOT USE FOR PRODUCTION PROPOSES!
````

This is a simple NodeJS micro-service for generate website screenshots. It uses the [node-webshot](https://github.com/brenden/node-webshot) and eventualy the [PhantomJS](https://github.com/ariya/phantomjs) for the image generation. Every request is queued in [Better Queue](https://github.com/diamondio/better-queue) for better queue.

## How to use

````bash
# Clone the repo
git clone https://github.com/christosgeorgiou/webshots

# Install dependencies
npm i

# Run
npm run start
````

The project will run by default to `PORT:3000`. You may change that with env variables.

### Query variables

- website [required]
- cache [default: true]

### Example

````example
http://localhost:3000/gen?website=google.com
````

````json
{
    "job": "0WfXpOqKRBG4",
    "website": "google.com",
    "url": "http://localhost:3000/shots/241e8486331a.848182.jpg",
    "stats": {
        "successRate": 0,
        "peak": 0,
        "average": 0,
        "total": 0
    }
}
````

The screenshot will be processed and will be available at:

````url
http://localhost:3000/shots/241e8486331a.848182.jpg
````

## License

The MIT License (MIT)

Copyright (c) 2018 Christos Georgiou

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.