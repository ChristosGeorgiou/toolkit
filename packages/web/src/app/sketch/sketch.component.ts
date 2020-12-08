import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import * as cuid from 'cuid';
import { Socket } from 'ngx-socket-io';


@Component({
  selector: 'app-sketch',
  templateUrl: './sketch.component.html',
  styleUrls: ['./sketch.component.scss']
})
export class SketchComponent implements OnInit, AfterViewInit {


  @ViewChild('paint') paint: ElementRef<HTMLElement>;
  @ViewChild('canvas') canvas: ElementRef<HTMLCanvasElement>;
  lineWidth: any;

  context: CanvasRenderingContext2D;

  x = 0;
  y = 0;
  isMouseDown = false;

  user = `user_${cuid()}`;
  room = 'demo';

  users = [];

  constructor(private socket: Socket) { }


  ngAfterViewInit(): void {
    this.canvas.nativeElement.width = this.paint.nativeElement.clientWidth;
    this.canvas.nativeElement.height = this.paint.nativeElement.clientHeight;
    this.context = this.canvas.nativeElement.getContext('2d');
    this.context.lineCap = 'round';
    this.context.strokeStyle = '#000';
  }

  ngOnInit(): void {
    this.lineWidth = 1;

    this.socket.on('connect', (event) => {
      this.socket.emit('join', {
        room: this.room,
        user: this.user
      });
    });

    this.socket.on('users', (event) => {
      this.users = event.users;
    });

    this.socket.on('event', (event) => {
      if (event.user === this.user) { return; }
      if (event.type === 'draw') {
        this.context.strokeStyle = event.data.strokeStyle;
        this.context.lineWidth = event.data.lineWidth;
        this.context.beginPath();
        this.context.moveTo(event.data.from.x, event.data.from.y);
        this.context.lineTo(event.data.to.x, event.data.to.y);
        this.context.stroke();
      }
      if (event.type === 'clear') {
        this.context.clearRect(0, 0, this.canvas.nativeElement.width, this.canvas.nativeElement.height);
      }
    });
  }

  join(): void {
    this.socket.emit('join', { room: this.room, user: this.user });
  }

  changeRoom() {

  }

  cyrb53(str, seed = 0) {
    let h1 = 0xdeadbeef ^ seed;
    let h2 = 0x41c6ce57 ^ seed;
    for (let i = 0, ch; i < str.length; i++) {
      ch = str.charCodeAt(i);
      h1 = Math.imul(h1 ^ ch, 2654435761);
      h2 = Math.imul(h2 ^ ch, 1597334677);
    }
    h1 = Math.imul(h1 ^ (h1 >>> 16), 2246822507) ^ Math.imul(h2 ^ (h2 >>> 13), 3266489909);
    h2 = Math.imul(h2 ^ (h2 >>> 16), 2246822507) ^ Math.imul(h1 ^ (h1 >>> 13), 3266489909);
    return 4294967296 * (2097151 & h2) + (h1 >>> 0);
  }

  export(): void { }

  selectColor(input): void {
    this.context.strokeStyle = input.value;
  }

  selectWidth(input): void {
    this.lineWidth = input.value;
    this.context.lineWidth = input.value;
  }

  stopDrawing(): void {
    this.isMouseDown = false;
  }

  clear(): void {
    this.context.clearRect(0, 0, this.canvas.nativeElement.width, this.canvas.nativeElement.height);
    this.socket.emit('event', {
      type: 'clear',
      user: this.user,
      room: this.room
    });
  }

  startDrawing(event): void {
    this.isMouseDown = true;
    this.x = event.offsetX;
    this.y = event.offsetY;
  }

  drawLine(event): void {
    if (this.isMouseDown) {
      const newX = event.offsetX;
      const newY = event.offsetY;
      this.context.beginPath();
      this.context.moveTo(this.x, this.y);
      this.context.lineTo(newX, newY);
      this.context.stroke();

      this.socket.emit('event', {
        type: 'draw',
        user: this.user,
        room: this.room,
        data: {
          lineWidth: this.context.lineWidth,
          strokeStyle: this.context.strokeStyle,
          from: {
            x: this.x,
            y: this.y
          },
          to: {
            x: newX,
            y: newY
          }
        }
      });

      this.x = newX;
      this.y = newY;
    }
  }



}
