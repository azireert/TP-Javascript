import { Injectable } from '@angular/core';
import { Contact} from '../models/contact.component';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  private  contactURL = 'http://localhost:3000/api/contacts';

  constructor(private http: HttpClient) { }

  getContact(): Observable<Contact[]> {
    return this.http.get<Contact[]>(this.contactURL);
  }

}
