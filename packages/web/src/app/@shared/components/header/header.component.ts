import { Component, Input, OnInit } from '@angular/core';
import { TOOLS } from '@shared/models/tools.contant';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Input() tool: string;
  toolObj: any;

  constructor() { }

  ngOnInit(): void {
    if (this.tool) {
      this.toolObj = TOOLS.find(x => x.name === this.tool);
    }
  }

}
