const { Chip } = require("node-libgpiod");
const express = require("express");

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
  }

  listen() {
    console.log("Car ready!");
    this.app.listen(3000);
  }
}

new Car().listen();
