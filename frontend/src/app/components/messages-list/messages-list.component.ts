import { Component, OnInit } from '@angular/core';

import { Message } from '../../models/message';
import { MessageService } from 'src/app/services/messages/message.service';



@Component({
  selector: 'app-messages-list',
  templateUrl: './messages-list.component.html',
  styleUrls: ['./messages-list.component.css']
})
export class MessagesListComponent implements OnInit {

  messages: Message[];

  constructor(
    private messageService: MessageService
  ) { }

  ngOnInit(): void {
    this.getMessages();
  }

  getMessages() {
    this.messageService.getMessages()
      .subscribe(messages => this.messages = messages);
  }
}
