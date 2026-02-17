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
  res.render('pages/index', { chips })
})

app.get('/chip/:name', (req, res) => {
  const chip = new gpio.Chip(req.params.name)
  const lines = []
  for (let i = 0; i < chip.numberOfLines; i++) {
    const line = chip.getLine(i)
    lines.push({
      chipName: chip.name,
      offset: line.offset,
      name: line.name,
      value: line.value,
      consumer: line.consumer,
      direction: line.direction,
      activeState: line.activeState
    })
  }
  res.render('pages/chip', { chip: { name: chip.name, label: chip.label, lines } })
})

app.put('/chip/:chipName/line/:offset/request-output', (req, res) => {
  const chip = new gpio.Chip(req.params.chipName)
  const line = chip.getLine(parseInt(req.params.offset))
  line.requestOutputMode()
  const result = {
    chipName: chip.name,
    offset: line.offset,
    name: line.name,
    value: line.value,
    consumer: line.consumer,
    direction: line.direction,
    activeState: line.activeState
  }
  line.release()
  res.render('partials/pin', { result })
})

app.put('/chip/:chipName/line/:offset/set/:value', (req, res) => {
  const chip = new gpio.Chip(req.params.chipName)
  const line = chip.getLine(parseInt(req.params.offset))
  line.requestOutputMode()
  line.setValue(parseInt(req.params.value))
  const result = {
    chipName: chip.name,
    offset: line.offset,
    name: line.name,
    value: line.value,
    consumer: line.consumer,
    direction: line.direction,
    activeState: line.activeState
  }
  line.release()
  res.render('partials/pin', { result })
})

// open to busibess
app.listen(3000, () => {
  console.log('Web Blinker app listening on port 3000')
})
