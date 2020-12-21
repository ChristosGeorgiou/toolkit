import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import * as QRCode from 'qrcode';
import { URIs } from './uris.contant';

@Component({
  selector: 'app-qrcode',
  templateUrl: './qrcode.component.html',
  styleUrls: ['./qrcode.component.scss']
})
export class QrcodeComponent implements OnInit {

  @ViewChild("canvas") canvas: ElementRef
  schemas = URIs

  qrcodeDataUrl: string

  uri = URIs[0].list[0]
  dinput = "cgeosoft.com"
  data: string;

  constructor() { }

  ngOnInit(): void {
    this.generate()
  }

  generate() {
    this.data = `${this.uri.scheme}:${this.uri.abempty ? '//' : ''}${this.dinput}`
    QRCode
      .toDataURL(this.data, {
        width: 250
      })
      .then(url => {
        this.qrcodeDataUrl = url
      })
      .catch(err => {
        console.error(err)
      })
  }

  // ngAfterViewInit(): void {
  //   const ctx = this.canvas.nativeElement.getContext('2d');
  //   ctx.filter = 'blur(40px)';
  //   QRCode.toCanvas(
  //     this.canvas.nativeElement,
  //     this.data, {
  //     width: 250
  //   }, (error) => {
  //     if (error) console.error(error)
  //     console.log('success!');
  //   })
  // }

}

