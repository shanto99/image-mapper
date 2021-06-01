import BaseDrawing from "./BaseDrawing";

export default class Rectangle extends BaseDrawing{
    constructor(drawingEl) {
        super(drawingEl);

    }

    handleMouseUp(event) {
        super.handleMouseUp(event);
        this.rect = null;
    }

    makeDrawing(position) {
        super.makeDrawing(position);
        if(!this.rect) {
            this.rect = document.createElementNS(this.svgns, 'rect');
            this.svg.appendChild(this.rect);
        }
        let initPosition = {...this.startingPosition};
        let width = (position.x - this.startingPosition.x);
        let height = (position.y - this.startingPosition.y);

        if(width < 0 || height < 0) {
            if(width < 0) {
                initPosition.x = position.x;
            }
            if(height < 0) {
                initPosition.y = position.y;
            }
        }
        width = Math.abs(width);
        height = Math.abs(height);

        gsap.set(this.rect, {
            attr: {x: initPosition.x, y: initPosition.y, width: width, height: height, fill: 'rgb(0,0,255,0.5)'}
        });

        // while (this.svg.lastChild) {
        //     this.svg.removeChild(this.svg.lastChild);
        // }
        // this.svg.appendChild(rect);
    }

}