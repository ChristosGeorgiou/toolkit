import { HttpClient } from '@angular/common/http';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-metadata',
  templateUrl: './metadata.component.html',
  styleUrls: ['./metadata.component.scss']
})
export class MetadataComponent implements OnInit {
  @ViewChild('url') url: ElementRef;

  og: any;
  screenshot;

  constructor(
    private http: HttpClient
  ) { }

  ngOnInit(): void {
  }

  getMetadata(): void {
    this.http
      .get('og', {
        params: {
          url: encodeURI(this.url.nativeElement.value)
        }
      })
      .subscribe(resp => {
        this.og = resp;
      });

    this.screenshot = `${environment.apiUrl}/screenshot?url=${encodeURI(this.url.nativeElement.value)}`;
  }
}
