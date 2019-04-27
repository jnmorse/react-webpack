require('dotenv').config()

const app = require('./server')

const port = process.env.PORT || 3000
const { stdout } = process

app.listen(port, (error) => {
  if (error) {
    stdout.write(`Error: ${error}\n\n`)
  } else {
    stdout.write(`Listen on port ${port}\n\n`)
  }
})
