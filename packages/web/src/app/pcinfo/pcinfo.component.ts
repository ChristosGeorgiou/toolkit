import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pcinfo',
  templateUrl: './pcinfo.component.html',
  styleUrls: ['./pcinfo.component.scss']
})
export class PcinfoComponent implements OnInit {

  details = [{
    label: 'Operating System',
    icon: 'fas fa-desktop',
    value: 'Linux (64 - bit)'
  }, {
    label: 'Browser',
    icon: 'fas fa-window-maximize',
    value: 'Chrome 86.0.4240.183'
  }, {
    label: 'IP Address',
    icon: 'fas fa-network-wired',
    value: '79.107.82.183'
  }, {
    label: 'Javascript Enabled',
    icon: 'fab fa-js',
    value: 'Yes'
  }, {
    label: 'Cookies Enabled',
    icon: 'fas fa-cookie-bite',
    value: 'Yes'
  }, {
    label: 'Color Depth',
    icon: 'fas fa-palette',
    value: '24'
  }, {
    label: 'Screen Resolution',
    icon: 'fas fa-expand-alt',
    value: '2560 x 1440'
  }, {
    label: 'Browser Window',
    icon: 'fas fa-expand-arrows-alt',
    value: '1272 x 1328'
  }, {
    label: 'User Agent',
    icon: 'fas fa-user-secret',
    value: 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML,like Gecko) Chrome / 86.0.4240.183 Safari / 537.36}'
  }];

  constructor() { }

  ngOnInit(): void {
  }

}
