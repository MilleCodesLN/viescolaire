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

}
