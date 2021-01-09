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

    this.sanity(this.left);
    this.sanity(this.right);

    this.app.get("/forward", (req, res) =>
      this.step(this.left.lFwd, this.right.lFwd, req, res, "moving forward")
    );
    this.app.get("/backward", (req, res) =>
      this.step(this.left.lBwd, this.right.lBwd, req, res, "moving backward")
    );
    this.app.get("/left", (req, res) =>
      this.step(this.left.lBwd, this.right.lFwd, req, res, "turning left")
    );
    this.app.get("/right", (req, res) =>
      this.step(this.left.lFwd, this.right.lBwd, req, res, "turning right")
    );
  }

  step(line1, line2, req, res, message) {
    line1.setValue(0);
    line2.setValue(0);
    setTimeout(() => {
      line1.setValue(1);
      line2.setValue(1);
      res.send("ok");
      console.log(message);
    }, req.query.duration || delay);
  }

  sanity(wheel) {
    wheel.lFwd.requestOutputMode();
    wheel.lBwd.requestOutputMode();
    wheel.lFwd.setValue(0);
    wheel.lBwd.setValue(0);
    wheel.lFwd.setValue(1);
    wheel.lBwd.setValue(1);
  }

  listen() {
    console.log("Car ready!");
    this.app.listen(3000);
  }
}

new Car().listen();
