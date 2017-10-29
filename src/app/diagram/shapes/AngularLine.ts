import * as Snap from 'snapsvg';

import { Shape } from './Shape';
import { StrokeType } from './StrokeType';

export class AngularLine extends Shape {
    line: Snap.Element;
    arrowHead: Snap.Element;

    constructor(container: Snap.Paper,
                private x1: number,
                private y1: number,
                private x2: number,
                private y2: number,
                private strokeType: StrokeType = StrokeType.Solid) {

        super(container);

        this.line = container.line(x1, y1, x2, y2);

        this.line.attr({
            stroke: 'white',
            strokeWidth: 2
        });

        if (strokeType === StrokeType.Dotted) {
            this.line.attr({
                strokeLinecap: 'round',
                strokeDasharray: '1, 5' });
        } else if (strokeType === StrokeType.Dashed) {
            this.line.attr({
                strokeLinecap: 'round',
                strokeDasharray: '4, 6' });
        }

        // TODO: create an arrowhead at the end of the line
        // this.arrowHead = container.marker(x2, y2, 40, 40, 100, 100);
    }

    move(x: number, y: number) {
        this.x2 = x;
        this.y2 = y;
        this.line.attr({x2: x, y2: y});
        // this.arrowHead.attr({points: [x, y]});
    }
}
