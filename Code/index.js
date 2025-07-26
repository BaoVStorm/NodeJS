const express = require('express')
const morgan = require('morgan')

// trả về 1 instance, 1 đối tượng để xây dựng website
const app = express()
const port = 3004

app.use(morgan('combined'))

// định nghĩa route (đường)
app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
