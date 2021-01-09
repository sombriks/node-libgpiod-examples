const { Chip } = require("node-libgpiod");
const express = require("express");

const delay = 250;

class Car {
  constructor() {
    this.chip = new Chip(0);
    this.app = express();
    this.app.use(express.static("public"));

    this.left = {
      lFwd: this.chip.getLine(13),
      lBwd: this.chip.getLine(6),
    };
    this.right = {
      lFwd: this.chip.getLine(19),
      lBwd: this.chip.getLine(26),
    };

    this.left.lFwd.requestOutputMode();
    this.left.lBwd.requestOutputMode();
    this.left.lFwd.setValue(0);
    this.left.lBwd.setValue(0);
    this.left.lFwd.setValue(1);
    this.left.lBwd.setValue(1);

    this.right.lFwd.requestOutputMode();
    this.right.lBwd.requestOutputMode();
    this.right.lFwd.setValue(0);
    this.right.lBwd.setValue(0);
    this.right.lFwd.setValue(1);
    this.right.lBwd.setValue(1);

    this.app.get("/forward", (req, res) =>
      this.step2(this.left.lFwd, this.right.lFwd, req, res, "moving forward")
    );
    this.app.get(
      "/backward",
      this.step(this.left.lBwd, this.right.lBwd, "moving backward")
    );
    this.app.get(
      "/left",
      this.step(this.left.lBwd, this.right.lFwd, "turning left")
    );
    this.app.get(
      "/right",
      this.step(this.left.lFwd, this.right.lBwd, "turning right")
    );
  }

  step(line1, line2, message) {
    return (req, res) => {
      line1.setValue(0);
      line2.setValue(0);
      setTimeout(() => {
        line1.setValue(1);
        line2.setValue(1);
        res.send("ok");
        console.log(message);
      }, req.query.duration || delay);
    };
  }

  step2(line1, line2, req, res, message) {
    line1.setValue(0);
    line2.setValue(0);
    setTimeout(() => {
      line1.setValue(1);
      line2.setValue(1);
      res.send("ok");
      console.log(message);
    }, req.query.duration || delay);
  }

  listen() {
    console.log("Car ready!");
    this.app.listen(3000);
  }
}

new Car().listen();
