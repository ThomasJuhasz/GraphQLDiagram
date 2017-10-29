import { AngularLine } from './AngularLine';
import { StrokeType } from './StrokeType';

export class Diagram {
    constructor(private container: Snap.Paper) {
        this.drawLine();
    }

    drawLine() {
        let line;

        document.addEventListener('click', evt => {
            if (line) {
                line = null;
            } else {
                const {x, y} = { x: evt.clientX, y: evt.clientY };
                line = new AngularLine(this.container, x, y, x, y, StrokeType.Dashed);
            }
        });

        document.addEventListener('mousemove', evt => {
          if (line) {
            const {x, y} = { x: evt.clientX, y: evt.clientY };
            line.move(x, y);
          }
        });
    }
}
