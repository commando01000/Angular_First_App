import { Component, OnInit, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-Contact',
  templateUrl: './Contact.component.html',
  styleUrls: ['./Contact.component.css'],
})
export class ContactComponent implements OnInit, AfterViewInit {
  username:any;
  constructor() {}

  ngOnInit() {}

  ngAfterViewInit() {
    this.username = document.getElementById('usernameLabel');
    console.log(this.username);
    
  }
}
