import * as Snap from 'snapsvg';

export abstract class Shape {
    constructor(private container: Snap.Paper) {
    }

    /**
     * @description This method should be overrided in every child class
     */
    abstract move(x: number, y: number): void;
}
