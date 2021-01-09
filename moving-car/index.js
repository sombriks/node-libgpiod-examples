const { Chip } = require("node-libgpiod");
const express = require("express");

const delay = 250;

class Car {
  constructor() {
    this.chip = new Chip(0);
    this.app = express();
    this.app.use(express.static("public"));
    this.left = {
      lineForward: this.chip.getLine(13),
      lineBackward: this.chip.getLine(6),
    };
    this.right = {
      lineForward: this.chip.getLine(19),
      lineBackward: this.chip.getLine(26),
    };

    this.left.lineForward.requestOutputMode();
    this.left.lineBackward.requestOutputMode();
    this.left.lineForward.setValue(0);
    this.left.lineBackward.setValue(0);

    this.right.lineForward.requestOutputMode();
    this.right.lineBackward.requestOutputMode();
    this.right.lineForward.setValue(0);
    this.right.lineBackward.setValue(0);

    this.app.get("/forward", (req, res) => {
      this.left.lineForward.setValue(0);
      this.right.lineForward.setValue(0);
      setTimeout(() => {
        this.left.lineForward.setValue(1);
        this.right.lineForward.setValue(1);
        res.send("ok");
        console.log("moving forward");
      }, delay);
    });
    this.app.get("/backward", (req, res) => {
      this.left.lineBackward.setValue(0);
      this.right.lineBackward.setValue(0);
      setTimeout(() => {
        this.left.lineBackward.setValue(1);
        this.right.lineBackward.setValue(1);
        res.send("ok");
        console.log("moving backward");
      }, delay);
    });
    this.app.get("/left", (req, res) => {
      this.left.lineBackward.setValue(0);
      this.right.lineForward.setValue(0);
      setTimeout(() => {
        this.left.lineBackward.setValue(1);
        this.right.lineForward.setValue(1);
        res.send("ok");
        console.log("turning left");
      }, delay);
    });
    this.app.get("/right", (req, res) => {
      this.left.lineForward.setValue(0);
      this.right.lineBackward.setValue(0);
      setTimeout(() => {
        this.left.lineForward.setValue(1);
        this.right.lineBackward.setValue(1);
        res.send("ok");
        console.log("turning right");
      }, delay);
    });
  }

  listen() {
    console.log("Car ready!");
    this.app.listen(3000);
  }
}

new Car().listen();
