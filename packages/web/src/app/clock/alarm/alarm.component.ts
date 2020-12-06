import { Component, OnInit } from '@angular/core';
import { add } from 'date-fns';

@Component({
  selector: 'app-alarm',
  templateUrl: './alarm.component.html',
  styleUrls: ['./alarm.component.scss']
})
export class AlarmComponent implements OnInit {

  alarm = {
    status: 'active',
    time: add(new Date(), { seconds: 10 })
  };

  constructor() { }

  ngOnInit(): void {
  }
}
