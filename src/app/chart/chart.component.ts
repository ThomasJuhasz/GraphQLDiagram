import { Component, OnInit, ElementRef } from '@angular/core';
import * as d3 from 'd3';
import { BaseType } from 'd3';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss']
})
export class ChartComponent implements OnInit {
  parentElement: any;
  nativeElement: any;
  svg: any;

  constructor(elementRef: ElementRef) {
    this.nativeElement = elementRef.nativeElement;
    this.parentElement = this.nativeElement.parentElement;
  }

  ngOnInit() {
    this.svg = d3.select(this.nativeElement).append('svg');

    window.addEventListener('resize', evt => this.setSize());
    this.setSize();

    const box1 = this.drawRect(25, 25);

    const box2 = this.drawRect(200, 200);

    const box3 = this.drawRect(600, 400);

    const box4 = this.drawRect(600, 600);

    this.link(box1, box2);
    this.link(box2, box4);
    this.link(box1, box3);
  }

  link(obj1, obj2) {
    const x1 = parseInt(obj1.attr('x'), 0) + parseInt(obj1.attr('width'), 0);
    const y1 =
      parseInt(obj1.attr('y'), 0) + parseInt(obj1.attr('height'), 0) / 2;

    const x2 = parseInt(obj2.attr('x'), 0);
    const y2 =
      parseInt(obj2.attr('y'), 0) + parseInt(obj2.attr('height'), 0) / 2;

    return this.drawLine([
      [x1, y1],
      [(x1 + x2) / 2, y1],
      [(x1 + x2) / 2, (y1 + y2) / 2],
      [x2, y2]
    ]);
  }

  drawLine(lineData) {
    const lineFunction: any = d3
      .line()
      .x(function([x, y]) {
        return x;
      })
      .y(function([x, y]) {
        return y;
      })
      .curve(d3.curveStepBefore);

    const pathData = lineFunction(lineData);

    return this.svg
      .append('path')
      .attr('d', pathData)
      .attr('stroke', 'white')
      .attr('stroke-width', 2)
      .attr('stroke-dasharray', '3, 3')
      .attr('fill', 'none');
  }

  drawRect(x, y) {
    return this.svg
      .append('rect')
      .attr('x', x)
      .attr('y', y)
      .attr('width', 50)
      .attr('height', 50)
      .style('fill', 'orange');
  }

  setSize() {
    this.svg
      .attr('width', this.parentElement.offsetWidth)
      // .attr('height', this.parentElement.offsetHeight);
      .attr('height', 800);
  }
}
