const Queue = require('better-queue')
const webshot = require('webshot')

function loadQueue() {
  return new Queue((input, cb) => {
    console.log(`[${input.job}]`, `executing...`)
    webshot(input.website, input.filepath, {
      renderDelay: 1 * 1000,
      shotSize: {
        height: 'all'
      },
      format: "jpg",
      quality: 50,
    }, (err) => {
      if (err) throw err
      console.log(`[${input.job}]`, `complete!`)
      cb(null, {
        job: input.job
      })
    })
  })
}

module.exports = {
  loadQueue: loadQueue
}