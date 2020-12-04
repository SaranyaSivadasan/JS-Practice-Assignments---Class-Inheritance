// declare class

// export class using module.exports

import { Component } from "react";

class Shape extends Component {
  constructor(color) {
    super();
    this.color = "red";
  }
  drawShape() {
    console.log("draw a shape");
  }

  calculateArea() {
    console.log("calculate the area ");
  }
}

module.exports = Shape;
