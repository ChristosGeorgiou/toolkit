const express = require('express')
const consoleStamp = require('console-stamp')
const cors = require('cors')

const handler = require('./lib/handler')

consoleStamp(console, {
  colors: {
    stamp: 'yellow',
    label: 'white',
    metadata: 'green'
  }
});

const app = express()

app.use(cors())

app.use('/shots', express.static('shots'))
app.use('/gen', handler)
app.use('/', (req, res) => {
  res.send({
    message:"Webshots service is running..."
  })
})

if (module === require.main) {
  const server = app.listen(process.env.PORT || 3000, () => {
    const port = server.address().port;
    console.log(`Server started on port ${port}`)
  });
}