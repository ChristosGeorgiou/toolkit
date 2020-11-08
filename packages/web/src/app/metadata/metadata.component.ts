import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-metadata',
  templateUrl: './metadata.component.html',
  styleUrls: ['./metadata.component.scss']
})
export class MetadataComponent implements OnInit {
  @ViewChild('url') url: ElementRef;

  metadata;

  constructor() { }

  ngOnInit(): void {
  }

  getMetadata(): void {
    this.metadata = {
      og: {
        title: 'BBC - Homepage',
        description: 'Breaking news, sport, TV, radio and a whole lot more. The BBC informs, educates and entertains - wherever you are, whatever your age.',
        type: 'website',
        image: 'https://static.bbci.co.uk/wwhp/1.146.0/responsive/img/apple-touch/apple-touch-180.jpg',
        url: 'https://www.bbc.com/',
        site_name: 'BBC'
      },
      screenshot: 'https://i.imgur.com/mLdeNo4.png'
    };
  }

}
