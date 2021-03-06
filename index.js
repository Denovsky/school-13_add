const express = require('express')
const path = require('path')

const app = express() 

const PORT = process.env.PORT || 80

app.use('/static', express.static(path.join(__dirname, 'public')))

app.set("view engine", "ejs")

app.get('/', (req, res) => {
  res.render('index')
})

app.listen(PORT, () => {
  console.log('app has been started')
})
