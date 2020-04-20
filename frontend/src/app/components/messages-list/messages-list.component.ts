import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


import { Message } from '../../models/message';
import { MessageService } from 'src/app/services/messages/messageService';
//import { Message } from '@angular/compiler/src/i18n/i18n_ast';



@Component({
  selector: 'app-messages-list',
  templateUrl: './messages-list.component.html',
  styleUrls: ['./messages-list.component.css']
})
export class MessagesListComponent implements OnInit {

  messages: Message[];
  message: Message;
  messageForm: FormGroup;
  // loading = false;
  errorMessage: string;

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
