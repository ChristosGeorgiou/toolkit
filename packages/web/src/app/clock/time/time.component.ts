import { Component, OnInit } from '@angular/core';
import { TOOLS } from '@shared/models/all';

@Component({
  selector: 'app-time',
  templateUrl: './time.component.html',
  styleUrls: ['./time.component.scss']
})
export class TimeComponent implements OnInit {
  hours: string;
  minutes: string;
  seconds: string;

  get color() {
    return TOOLS.find(x => x.name === 'clock').color;
  }

  constructor() { }

  ngOnInit(): void {

    setInterval(() => {
      const dt = new Date();
      this.hours = `${dt.getHours()}`.padStart(2, '0');
      this.minutes = `${dt.getMinutes()}`.padStart(2, '0');
      this.seconds = `${dt.getSeconds()}`.padStart(2, '0');
    }, 100);
  }

}
