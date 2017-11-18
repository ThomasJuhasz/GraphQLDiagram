export abstract class Shape {
  constructor(private container: any) {}

  /**
     * @description This method should be overrided in every child class
     */
  abstract move(x: number, y: number): void;
}
