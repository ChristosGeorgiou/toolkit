import { Component, Input, OnInit } from '@angular/core';
import { TOOLS } from '@shared/models/all';

@Component({
  selector: 'app-base',
  templateUrl: './base.component.html',
  styleUrls: ['./base.component.scss']
})
export class BaseComponent implements OnInit {

  @Input() size = 'lg';
  @Input() back;
  @Input() tool;

  color: string;

  constructor() { }

  ngOnInit(): void {
    if (this.tool) {
      const t = TOOLS.find(x => x.name === this.tool);
      this.color = t.color;
    }
  }

}
