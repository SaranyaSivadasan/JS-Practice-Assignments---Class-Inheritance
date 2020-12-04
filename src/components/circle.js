// import using require

// declare class

// export class using module.exports

let Shape = require("./shape");
class Circle extends Shape {
  constructor() {
    super();
    this.color = "blue";
  }
  calculateArea() {
    console.log("calculate");
  }
}

module.exports = Circle;
