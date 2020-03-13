import { Component, OnInit, ViewChild } from '@angular/core';
import { ChatService } from '../../services/chat.service';
import { catchError } from 'rxjs/operators';


@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {
  message: string;
  chatActive = false;
  date = new Date();
  chatMessages = [];

  constructor(
    private chatService: ChatService
  ) { }

  ngOnInit(): void {
  }

  showChat() {
    this.chatActive = !this.chatActive;
  }

  sendMessage() {
    this.chatMessages.push({
      message: this.message,
      date: new Date(),
      img: 'assets/images/chat/avatar1.png',
      from: 'usuario'
    });
    this.chatService.getResponse(this.message)
      .pipe(
        catchError((err: any) => {
          throw err;
        })
      )
      .subscribe((res: any) => {
        console.log(res);
        res.date = new Date();
        res.img = 'assets/images/chat/avatar2.jpeg';
        this.chatMessages.push(res);
        this.message = '';
      });
  }
}
