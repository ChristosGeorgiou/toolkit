import { Component, OnInit } from '@angular/core';
import { TOOLS } from '@shared/models/all';
import { add } from 'date-fns';

@Component({
  selector: 'app-clock',
  templateUrl: './clock.component.html',
  styleUrls: ['./clock.component.scss']
})
export class ClockComponent implements OnInit {

  hours = '00';
  minutes = '00';
  seconds = '00';
  color: string;

  alarm = {
    status: 'active',
    time: add(new Date(), { seconds: 10 })
  };

  constructor() { }

  ngOnInit(): void {
    const t = TOOLS.find(x => x.name === 'clock');
    this.color = t.color;

    setInterval(() => {
      const dt = new Date();
      this.hours = `${dt.getHours()}`.padStart(2, '0');
      this.minutes = `${dt.getMinutes()}`.padStart(2, '0');
      this.seconds = `${dt.getSeconds()}`.padStart(2, '0');
    }, 100);
  }

}
