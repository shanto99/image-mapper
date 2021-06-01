export default class BaseDrawing {
    constructor(drawingEl) {
        this.drawingElement = drawingEl;
        this.svgns = "http://www.w3.org/2000/svg";
        this.mousePosition = this.mousePosition.bind(this);
        this.handleMouseDown = this.handleMouseDown.bind(this);
        this.handleMouseMove = this.handleMouseMove.bind(this);
        this.makeDrawing = this.makeDrawing.bind(this);
        this.handleMouseUp = this.handleMouseUp.bind(this);
        this.handleMouseLeave = this.handleMouseLeave.bind(this);

        this.addHandlers = this.addHandlers.bind(this);
        this.removeHandlers = this.removeHandlers.bind(this);

        this.svg = document.getElementById("drawing-svg");

        this.drawingElement = this.svg;

        this.drawingElement.onmousedown = this.handleMouseDown;

    }

    addHandlers() {
        this.drawingElement.onmousemove = this.handleMouseMove;
        this.drawingElement.onmouseleave = this.handleMouseLeave;
        this.drawingElement.onmouseup = this.handleMouseUp;
        document.onmouseup = this.handleMouseUp;
    }

    removeHandlers() {
        this.drawingElement.onmousemove = null;
        this.drawingElement.onmouseleave = null;
        this.drawingElement.onmouseup = null;
        document.onmouseup = null;
    }

     mousePosition(event) {
        let boundingRect = this.drawingElement.getBoundingClientRect();
        return {
            x: event.clientX - boundingRect.x,
            y: event.clientY - boundingRect.y
        };
    }

    handleMouseDown(event) {
        event.preventDefault();

        this.addHandlers();
        this.startingPosition = this.mousePosition(event);

    }

    handleMouseMove(event) {
        event.preventDefault();
        let position = this.mousePosition(event);
        this.makeDrawing(position);

    }

    makeDrawing(position) {}

    handleMouseLeave() {
        console.log("mouseleave");
        this.removeHandlers();
    }

    handleMouseUp(event) {
        console.log("mouseup");
        this.removeHandlers();
    }

}