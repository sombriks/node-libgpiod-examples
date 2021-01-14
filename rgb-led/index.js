import express from "express";
import { Chip } from "node-libgpiod";

const app = express();

app.use(express.static("public"));

app.chip0 = new Chip(0);
app.red = app.chip0.getLine(21);
app.green = app.chip0.getLine(20);
app.blue = app.chip0.getLine(16);

[app.red, app.green, app.blue].forEach((led) => led.requestOutputMode());

app.get("/:led/:onoff", (req, res) => {
  const { led, onoff } = req.params;
  console.log(`${led} ${onoff}`);
  app[led].setValue(onoff);
  res.send("ok");
});

app.listen(3000);
console.log("light the led!");
