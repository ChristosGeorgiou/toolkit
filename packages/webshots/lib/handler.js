const uid = require('short-unique-id');
const fs = require('fs')
const path = require('path')

const generator = require('./generator')
const queue = require('./queue')

const q = queue.loadQueue()

function handler(req, res) {
  const website = req.query.website
  const cache = req.query.cache === undefined ? true : req.query.cache

  const job = (new uid()).randomUUID(12)

  const filename = generator.filename(website, "jpg")
  const filepath = path.join(__dirname, "..", 'shots', filename)
  const fileUrl = `/shots/${filename}`

  console.log(`[${job}]`, `Req: ${website}`)

  if (!website) {
    return res.status(400).send({
      error: 'Bad Request',
      message: 'The \'website\' parameter with the required url should be provided'
    })
  }

  fs.stat(filepath, (err, stats) => {
    if (!stats || cache) {
      q.push({
        job: job,
        website: website,
        filepath: filepath
      })
    } else {
      console.log(`[${job}]`, "Exist:", filepath)
    }
  })

  res.send({
    job: job,
    website: website,
    url: fileUrl,
    stats: q.getStats()
  })
}

module.exports = handler