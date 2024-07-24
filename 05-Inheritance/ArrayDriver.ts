import { Circle } from "./Circle";
import { Rectangle } from "./Rectangle";
import { Shape } from "./Shape";


let myShape = new Shape(1,1) ;
let myCircle = new Circle(2, 2, 20);
let myRectangle = new Rectangle(3, 3, 30, 30);

let shapes: Shape[] = [];
shapes.push(myShape);
shapes.push(myCircle);
shapes.push(myRectangle);

for(let tempShape of shapes){
    console.log(tempShape.getInfo());
}