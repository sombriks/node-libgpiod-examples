// index.js
const express = require('express');
const gpio = require('node-libgpiod');

const app = express();
const chip = new gpio.Chip(3);

app.use(express.static('public'));
app.use(express.static('node_modules/alpinejs/dist'));

app.get('/api/led/:state', (req, res) => {
  const { state } = req.params;
  console.log(`Received request to turn LED ${state}`);
  try {
    const v = state === 'on' ? 1 : 0;
    const led = chip.getLine(20);
    led.requestOutputMode();
    led.setValue(v);
    led.release();
    res.json({ status: `LED turned ${state}` });
  } catch (error) {
    console.error('Error controlling LED:', error);
    res.status(500).json({ error: 'Failed to control LED' });
  }
});

app.listen(3000, () => {
  console.log('Web Blinker app listening on port 3000');
});