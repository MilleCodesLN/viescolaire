import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { Message } from '../../models/message';
import { MessageService } from 'src/app/services/messages/messageService';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-add-message',
  templateUrl: './add-message.component.html',
  styleUrls: ['./add-message.component.css']
})
export class AddMessageComponent implements OnInit {

  //message: Message;
  message: Message = {
    id: null,
    messages: '',
    user_id: 1,
    created_at: null,
    updated_at: null,
  };



  constructor(private messageService: MessageService) { }

  ngOnInit(): void {
  }
  saveMessage(): void {
    this.messageService.saveMessage(this.message)
      .subscribe(message => this.message = message);
  }

}
