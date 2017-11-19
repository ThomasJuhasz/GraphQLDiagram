import { Component, OnInit } from '@angular/core';
import { DiagramScheme } from '../../models/diagram/DiagramScheme';
import { DiagramLinkType } from '../../models/diagram/DiagramLinkType';
import { AngularLine } from './shapes/AngularLine';
import { StrokeType } from './shapes/StrokeType';
import { Diagram } from './shapes/Diagram';

@Component({
  selector: 'app-diagram',
  templateUrl: './diagram.component.html',
  styleUrls: ['./diagram.component.scss']
})
export class DiagramComponent implements OnInit {
  scheme: DiagramScheme;

  constructor() {}

  ngOnInit() {
    this.createTestData();
    this.createSVGStage();
  }

  createSVGStage() {
    // const svg: Snap.Paper = Snap('#svg');

    // const diagram = new Diagram(svg);
  }

  createTestData() {
    // unused for now
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
