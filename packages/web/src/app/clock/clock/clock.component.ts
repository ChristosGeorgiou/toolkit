import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-clock',
  templateUrl: './clock.component.html',
  styleUrls: ['./clock.component.scss']
})
export class ClockComponent implements OnInit {

  hours = '00';
  minutes = '00';
  seconds = '00';

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
