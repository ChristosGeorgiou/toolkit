import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {

  messages = [
    { time: "2020-01-01 22:56:20", user: { avatar: "https://randomuser.me/api/portraits/men/38.jpg" }, text: "lorem ipsum" },
    { time: "2020-01-01 22:56:20", user: { avatar: "https://randomuser.me/api/portraits/men/39.jpg" }, text: "lorem ipsum" },
    { time: "2020-01-01 22:56:20", user: { avatar: "https://randomuser.me/api/portraits/men/40.jpg" }, text: "lorem ipsum" },
    { time: "2020-01-01 22:56:20", user: { avatar: "https://randomuser.me/api/portraits/men/37.jpg" }, text: "lorem ipsum" },
    { time: "2020-01-01 22:56:20", user: { avatar: "https://randomuser.me/api/portraits/men/36.jpg" }, text: "lorem ipsum" },
    { time: "2020-01-01 22:56:20", user: { avatar: "https://randomuser.me/api/portraits/men/32.jpg" }, text: "lorem ipsum" },
    { time: "2020-01-01 22:56:20", user: { avatar: "https://randomuser.me/api/portraits/men/38.jpg" }, text: "lorem ipsum" },
    { time: "2020-01-01 22:56:20", user: { avatar: "https://randomuser.me/api/portraits/men/39.jpg" }, text: "lorem ipsum" },
    { time: "2020-01-01 22:56:20", user: { avatar: "https://randomuser.me/api/portraits/men/40.jpg" }, text: "lorem ipsum" },
    { time: "2020-01-01 22:56:20", user: { avatar: "https://randomuser.me/api/portraits/men/37.jpg" }, text: "lorem ipsum" },
    { time: "2020-01-01 22:56:20", user: { avatar: "https://randomuser.me/api/portraits/men/36.jpg" }, text: "lorem ipsum" },
    { time: "2020-01-01 22:56:20", user: { avatar: "https://randomuser.me/api/portraits/men/32.jpg" }, text: "lorem ipsum" },
    { time: "2020-01-01 22:56:20", user: { avatar: "https://randomuser.me/api/portraits/men/38.jpg" }, text: "lorem ipsum" },
    { time: "2020-01-01 22:56:20", user: { avatar: "https://randomuser.me/api/portraits/men/39.jpg" }, text: "lorem ipsum" },
    { time: "2020-01-01 22:56:20", user: { avatar: "https://randomuser.me/api/portraits/men/40.jpg" }, text: "lorem ipsum" },
    { time: "2020-01-01 22:56:20", user: { avatar: "https://randomuser.me/api/portraits/men/37.jpg" }, text: "lorem ipsum" },
    { time: "2020-01-01 22:56:20", user: { avatar: "https://randomuser.me/api/portraits/men/36.jpg" }, text: "lorem ipsum" },
    { time: "2020-01-01 22:56:20", user: { avatar: "https://randomuser.me/api/portraits/men/32.jpg" }, text: "lorem ipsum" },
    { time: "2020-01-01 22:56:20", user: { avatar: "https://randomuser.me/api/portraits/men/38.jpg" }, text: "lorem ipsum" },
    { time: "2020-01-01 22:56:20", user: { avatar: "https://randomuser.me/api/portraits/men/39.jpg" }, text: "lorem ipsum" },
    { time: "2020-01-01 22:56:20", user: { avatar: "https://randomuser.me/api/portraits/men/40.jpg" }, text: "lorem ipsum" },
    { time: "2020-01-01 22:56:20", user: { avatar: "https://randomuser.me/api/portraits/men/37.jpg" }, text: "lorem ipsum" },
    { time: "2020-01-01 22:56:20", user: { avatar: "https://randomuser.me/api/portraits/men/36.jpg" }, text: "lorem ipsum" },
    { time: "2020-01-01 22:56:20", user: { avatar: "https://randomuser.me/api/portraits/men/32.jpg" }, text: "lorem ipsum" },
    { time: "2020-01-01 22:56:20", user: { avatar: "https://randomuser.me/api/portraits/men/38.jpg" }, text: "lorem ipsum" },
    { time: "2020-01-01 22:56:20", user: { avatar: "https://randomuser.me/api/portraits/men/39.jpg" }, text: "lorem ipsum" },
    { time: "2020-01-01 22:56:20", user: { avatar: "https://randomuser.me/api/portraits/men/40.jpg" }, text: "lorem ipsum" },
    { time: "2020-01-01 22:56:20", user: { avatar: "https://randomuser.me/api/portraits/men/37.jpg" }, text: "lorem ipsum" },
    { time: "2020-01-01 22:56:20", user: { avatar: "https://randomuser.me/api/portraits/men/36.jpg" }, text: "lorem ipsum" },
    { time: "2020-01-01 22:56:20", user: { avatar: "https://randomuser.me/api/portraits/men/32.jpg" }, text: "lorem ipsum" },
    { time: "2020-01-01 22:56:20", user: { avatar: "https://randomuser.me/api/portraits/men/38.jpg" }, text: "lorem ipsum" },
    { time: "2020-01-01 22:56:20", user: { avatar: "https://randomuser.me/api/portraits/men/39.jpg" }, text: "lorem ipsum" },
    { time: "2020-01-01 22:56:20", user: { avatar: "https://randomuser.me/api/portraits/men/40.jpg" }, text: "lorem ipsum" },
    { time: "2020-01-01 22:56:20", user: { avatar: "https://randomuser.me/api/portraits/men/37.jpg" }, text: "lorem ipsum" },
    { time: "2020-01-01 22:56:20", user: { avatar: "https://randomuser.me/api/portraits/men/36.jpg" }, text: "lorem ipsum" },
    { time: "2020-01-01 22:56:20", user: { avatar: "https://randomuser.me/api/portraits/men/32.jpg" }, text: "lorem ipsum" },
  ]

  @ViewChild("timeline") timeline: ElementRef

  constructor() { }

  ngOnInit(): void {
    setTimeout(() => {

      this.timeline.nativeElement.scrollTo(0,this.timeline.nativeElement.scrollHeight);
    }, 1000);

  }

  onAfterViewInit(){
  }

}
