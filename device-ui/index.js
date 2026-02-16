// index.js
const express = require('express')
const gpio = require('node-libgpiod')

const app = express()
app.set('view engine', 'pug')

// static assets
app.use('/bulma', express.static('node_modules/bulma/css'))
app.use('/htmx.org', express.static('node_modules/htmx.org/dist'))

// ui routes
app.get('/', (req, res) => {
  const names = gpio.chipNames
  const chips = names.map(name => {
    const chip = new gpio.Chip(name)
    return {
      name,
      numberOfLines: chip.numberOfLines,
      lineNames: chip.lineNames
    }
  })
  console.log(chips)
  res.render('pages/index', { chips })
})

app.listen(3000, () => {
  console.log('Web Blinker app listening on port 3000')
})
