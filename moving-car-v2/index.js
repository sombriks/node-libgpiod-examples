const { Chip } = require("node-libgpiod");
const express = require("express");

const app = express();

app.chip = new Chip(0);
app.lfwd = app.chip.getLine(13);
app.lbwd = app.chip.getLine(6);
app.rfwd = app.chip.getLine(19);
app.rbwd = app.chip.getLine(26);

app.use(express.static("public"));

// sanity
[app.lfwd, app.rfwd, app.lbwd, app.rbwd].forEach((line) => {
  line.requestOutputMode();
  line.setValue(0);
  line.setValue(1);
});

const perform = (msg, val, line, res) => {
  console.log(`${msg} is ${val}`);
  line.setValue(val);
  res.send("ok");
};

app.get("/left/forward/:onoff", (req, res) =>
  perform("left forward", req.params.onoff, app.lfwd, res)
);
app.get("/left/backward/:onoff", (req, res) =>
  perform("left backward", req.params.onoff, app.lbwd, res)
);
app.get("/right/forward/:onoff", (req, res) =>
  perform("right forward", req.params.onoff, app.rfwd, res)
);
app.get("/right/backward/:onoff", (req, res) =>
  perform("right backward", req.params.onoff, app.rbwd, res)
);

app.listen(3000);
console.log("car v2 ready!");
