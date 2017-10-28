import * as Snap from 'snapsvg-cjs';

import { Component, OnInit } from '@angular/core';
import { DiagramScheme } from '../../models/diagram/DiagramScheme';
import { DiagramLinkType } from '../../models/diagram/DiagramLinkType';

@Component({
  selector: 'app-diagram',
  templateUrl: './diagram.component.html',
  styleUrls: ['./diagram.component.scss']
})
export class DiagramComponent implements OnInit {
  scheme: DiagramScheme;

  constructor() { }

  ngOnInit() {
    this.createTestData();
    this.createSVGStage();
  }

  createSVGStage() {
    const svg = Snap('#svg');

    // Lets create big circle in the middle:

    const line = svg.line(50, 100, 400, 400);

    line.attr({ stroke: 'white' });

    document.addEventListener('mousemove', evt => {
      const {x, y} = { x: evt.clientX, y: evt.clientY };
      line.attr({
        x2: x,
        y2: y
      });
    });
  }

  createTestData() {
    this.scheme = {
      name: 'MyScheme',
      objects: [
        {
          name: 'post',
          properties: [
            {
              name: 'title',
              type: 'string',
              link: null
            },
            {
              name: 'body',
              type: 'string',
              link: null
            },
            {
              name: 'author',
              type: 'string',
              link: {
                to: 'author',
                type: DiagramLinkType.ManyToMany
              }
            }
          ]
        },
        {
          name: 'author',
          properties: [
            {
              name: 'name',
              type: 'string',
              link: null
            },
            {
              name: 'age',
              type: 'string',
              link: null
            },
            {
              name: 'posts',
              type: 'object',
              link: {
                to: 'post',
                type: DiagramLinkType.ManyToMany
              }
            }
          ]
        }
      ]
    };
  }
}
