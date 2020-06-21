const CACHE_MINUTES = process.env.CACHE || 30

const crypto = require('crypto')

function filename(url,ext) {
  const hash = crypto.createHash('md5').update(url).digest('hex').substr(0,12)
  const date = Math.round((new Date()).getTime() / (CACHE_MINUTES * 60 * 1000))
  const file = `${hash}.${date}.${ext}`

  return file
}

module.exports = {
  filename: filename
}