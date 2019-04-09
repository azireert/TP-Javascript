import { Component, OnInit } from '@angular/core';
import {ContactService} from '../../shared/services/contact.service';
import {Contact} from '../../shared/models/contact.component';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  ListContact: Contact[];
  constructor(private data: ContactService) { }

  ngOnInit() {
    this.data.getContact().subscribe(data => {
      this.ListContact = data;
      console.log(data);
    });
  }

}
