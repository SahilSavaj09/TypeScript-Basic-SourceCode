import { Circle } from "./Circle";
import { Rectangle } from "./Rectangle";
import { Shape } from "./Shape";


let myShape = new Shape(1,1) ;
console.log(myShape.getInfo());

let myCircle = new Circle(2, 2, 20);
console.log(myCircle.getInfo());

let myRectangle = new Rectangle(3, 3, 30, 30);
console.log(myRectangle.getInfo());
