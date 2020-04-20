import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Message } from '../../models/message';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  private url = 'http://127.0.0.1:3000'

  constructor(
    private http: HttpClient
  ) { }

  getMessages(): Observable<Message[]> {
    return this.http.get<Message[]>(this.url + "/messages");
  }

  saveMessage(message: Message): Observable<Message> {
    return this.http.post<Message>(this.url + "/messages", message);

  }







  /** POST: add a new message */
  // addMessage(message: Message): Observable<Message> {
  //   return this.http.post<Message>(this.url, message).pipe(
  //     tap((newMessage: Message) => this.log(`added hero w/ id=${newMessage.id}`)),
  //     catchError(this.handleError<Message>('addMessage'))
  //   );
  // }




}
