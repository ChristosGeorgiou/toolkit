import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  tools = [{
    icon: 'fas fa-clock',
    link: '/clock',
    color: '#3F51B5',
    title: 'Clock',
    description: 'Set alarm, timewatches etc'
  }, {
    icon: 'fas fa-globe-europe',
    link: '/metadata',
    color: '#4CAF50',
    title: 'Web Metadata',
    description: 'Get metadata of any website with screenshots'
  }, {
    icon: 'fas fa-info-circle',
    link: '/info',
    color: '#E91E63',
    title: 'Info',
    description: 'Show you pc info. You may share with your support'
  }];

  constructor() { }

  ngOnInit(): void {
  }

}
