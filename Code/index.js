const express = require('express')

// trả về 1 instance, 1 đối tượng để xây dựng website
const app = express()
const port = 3000

// định nghĩa route (đường)
app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
