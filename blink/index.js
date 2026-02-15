// blink motherfucker!
const gpio = require('node-libgpiod')

const chip = new gpio.Chip(3)

let count = 0

setInterval(() => {
  const led = chip.getLine(20)
  led.requestOutputMode()
  const v = count++ % 2 	  
  led.setValue(v)
  console.log(`blink ${v}!`)
  led.release()
}, 1000)
