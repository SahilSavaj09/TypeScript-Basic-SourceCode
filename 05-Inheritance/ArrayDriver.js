"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Circle_1 = require("./Circle");
var Rectangle_1 = require("./Rectangle");
var Shape_1 = require("./Shape");
var myShape = new Shape_1.Shape(1, 1);
var myCircle = new Circle_1.Circle(2, 2, 20);
var myRectangle = new Rectangle_1.Rectangle(3, 3, 30, 30);
var shapes = [];
shapes.push(myShape);
shapes.push(myCircle);
shapes.push(myRectangle);
for (var _i = 0, shapes_1 = shapes; _i < shapes_1.length; _i++) {
    var tempShape = shapes_1[_i];
    console.log(tempShape.getInfo());
}
