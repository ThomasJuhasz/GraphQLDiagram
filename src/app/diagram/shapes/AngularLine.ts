import * as Snap from 'snapsvg';

import { Point } from './Point';
import { Shape } from './Shape';

export class AngularLine extends Shape {
    line: Snap.Element;

    constructor(container: Snap.Paper,
                private x1: number,
                private y1: number,
                private x2: number,
                private y2: number) {

        super(container);

        this.line = container.line(x1, y1, x2, y2);

        this.line.attr({ stroke: 'white' });
    }

    redraw(x1: number, y1: number, x2: number, y2: number) {
        this.x1 = x1;
        this.y1 = y1;
        this.x2 = x2;
        this.y2 = y2;
        this.line.attr({x1, y1, x2, y2});
    }
}
