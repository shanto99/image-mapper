import Rectangle from "./Rectangle";
import Circle from "./Circle";

let draw = null;
let currentShape = null;
const shapes = document.getElementById("drawing-shapes");
const drawingElement = document.getElementById("mapping-image");

shapes.addEventListener("click", selectShape);

function selectShape(e) {
    e.stopPropagation();
    let tool = e.target.dataset.tool;
    if(tool === "rectangle") {
        currentShape = new Rectangle(drawingElement);
    } else {
        currentShape = new Circle(drawingElement);
    }
}

