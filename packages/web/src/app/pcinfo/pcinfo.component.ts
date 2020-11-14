import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { circle, latLng, marker, tileLayer } from 'leaflet';

@Component({
  selector: 'app-pcinfo',
  templateUrl: './pcinfo.component.html',
  styleUrls: ['./pcinfo.component.scss']
})
export class PcinfoComponent implements OnInit {

  browser: {
    name?: string
    os?: string
    ua?: string
    color?: string
    resolution?: string
  } = {};

  location: any;

  leaflet = {
    options: {
      layers: [
        tileLayer('http://c.tile.stamen.com/watercolor/{z}/{x}/{y}.jpg', { maxZoom: 18, attribution: '...' })
      ],
      zoom: 5,
      center: null
    },
    layers: []
  };

  constructor(
    private http: HttpClient
  ) { }

  ngOnInit(): void {
    this.loadBrowser();
    this.loadLocation();
  }

  private loadBrowser(): void {
    this.browser.ua = navigator.userAgent;
    this.browser.os = this.getOsName();
    this.browser.color = `${screen.colorDepth} bit`;
    this.browser.name = this.getBrowserName();
    this.browser.resolution = `${screen.width}px X ${screen.height}px`;
  }

  private loadLocation(): void {
    this.http
      .get<any>(`geoip`)
      .subscribe(resp => {
        this.location = resp;
        this.leaflet.options.center = latLng(resp.geo.ll);
        this.leaflet.layers = [
          circle(resp.geo.ll, { radius: resp.geo.area }),
          marker(resp.geo.ll)
        ];
      });
  }

  private getOsName(): string {
    let os = 'Unknown OS';
    if (navigator.appVersion.indexOf('Win') !== -1) { os = 'Windows'; }
    if (navigator.appVersion.indexOf('Mac') !== -1) { os = 'MacOS'; }
    if (navigator.appVersion.indexOf('X11') !== -1) { os = 'UNIX'; }
    if (navigator.appVersion.indexOf('Linux') !== -1) { os = 'Linux'; }
    return os;
  }

  private getBrowserName(): string {
    const navUserAgent = navigator.userAgent;
    let browserName = navigator.appName;
    let browserVersion = '' + parseFloat(navigator.appVersion);
    const majorVersion = parseInt(navigator.appVersion, 10);
    let tempNameOffset, tempVersionOffset, tempVersion;

    if ((tempVersionOffset = navUserAgent.indexOf('Opera')) != -1) {
      browserName = 'Opera';
      browserVersion = navUserAgent.substring(tempVersionOffset + 6);
      if ((tempVersionOffset = navUserAgent.indexOf('Version')) != -1) {
        browserVersion = navUserAgent.substring(tempVersionOffset + 8);
      }
    } else if ((tempVersionOffset = navUserAgent.indexOf('MSIE')) != -1) {
      browserName = 'Microsoft Internet Explorer';
      browserVersion = navUserAgent.substring(tempVersionOffset + 5);
    } else if ((tempVersionOffset = navUserAgent.indexOf('Chrome')) != -1) {
      browserName = 'Chrome';
      browserVersion = navUserAgent.substring(tempVersionOffset + 7);
    } else if ((tempVersionOffset = navUserAgent.indexOf('Safari')) != -1) {
      browserName = 'Safari';
      browserVersion = navUserAgent.substring(tempVersionOffset + 7);
      if ((tempVersionOffset = navUserAgent.indexOf('Version')) != -1) {
        browserVersion = navUserAgent.substring(tempVersionOffset + 8);
      }
    } else if ((tempVersionOffset = navUserAgent.indexOf('Firefox')) != -1) {
      browserName = 'Firefox';
      browserVersion = navUserAgent.substring(tempVersionOffset + 8);
    } else if ((tempNameOffset = navUserAgent.lastIndexOf(' ') + 1) < (tempVersionOffset = navUserAgent.lastIndexOf('/'))) {
      browserName = navUserAgent.substring(tempNameOffset, tempVersionOffset);
      browserVersion = navUserAgent.substring(tempVersionOffset + 1);
      if (browserName.toLowerCase() == browserName.toUpperCase()) {
        browserName = navigator.appName;
      }
    }

    // trim version
    if ((tempVersion = browserVersion.indexOf(';')) != -1) {
      browserVersion = browserVersion.substring(0, tempVersion);
    }
    if ((tempVersion = browserVersion.indexOf(' ')) != -1) {
      browserVersion = browserVersion.substring(0, tempVersion);
    }

    return `${browserName} ${browserVersion}`;
  }

}
