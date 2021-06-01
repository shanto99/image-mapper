import BaseDrawing from "./BaseDrawing";

export default class Circle extends BaseDrawing{
    constructor(drawingEl) {
        super(drawingEl);
    }

    handleMouseUp(event) {
        super.handleMouseUp(event);
        this.circle = null;
    }

    makeDrawing(position) {
        super.makeDrawing(position);
        if(!this.circle) {
         this.circle = document.createElementNS(this.svgns, "circle");
         this.svg.append(this.circle);
        }
        let xDiff = Math.abs(position.x - this.startingPosition.x);
        let yDiff = Math.abs(position.y - this.startingPosition.y);

        let radius = xDiff > yDiff ? xDiff : yDiff;

        gsap.set(this.circle, {
            attr: {
                cy: this.startingPosition.y,
                cx: this.startingPosition.x,
                r: radius,
                fill: 'rgb(0,0,255,0.5)'
            },
        });

        // while (mySvg.lastChild) {
        //     mySvg.removeChild(mySvg.lastChild);
        // }
        // mySvg.appendChild(newCirc);
    }
}