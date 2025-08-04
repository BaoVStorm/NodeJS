const path = require('path')
const express = require('express')
const morgan = require('morgan')
const { engine } = require('express-handlebars');

// trả về 1 instance, 1 đối tượng để xây dựng website
const app = express()
const port = 3004

// HTTP logger
app.use(morgan('combined'))


app.use(express.static)
// cho phép post từ code js của client
app.use(express.json());
// cho phép post từ form của client
app.use(express.urlencoded());

// Template Engine
app.engine('hbs', engine({
  extname: '.hbs'
}));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources/views'));

// định nghĩa route (đường)
app.get('/', (req, res) => {
  res.render('home')
})

app.get('/news', (req, res) => {
  res.render('news')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
