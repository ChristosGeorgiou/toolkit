import { Component } from '@angular/core';
import { TOOLS } from '@shared/models/all';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  tools = TOOLS;

}
