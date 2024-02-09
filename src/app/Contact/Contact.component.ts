import { Component, OnInit, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-Contact',
  templateUrl: './Contact.component.html',
  styleUrls: ['./Contact.component.css'],
})
export class ContactComponent implements OnInit, AfterViewInit {
  username: any;
  userNameText: any;
  age: any;
  ageText: any;
  email:any;
  emailText:any;
  password:any;
  passwordText:any;
  constructor() {}

  ngOnInit() {}

  ngAfterViewInit() {}
  animateLabel() {
    this.username = document.getElementById('usernameLabel');
    this.userNameText = document.getElementById('username');
    this.age = document.getElementById('ageLabel');
    this.ageText = document.getElementById('age');
    this.email = document.getElementById('emailLabel');
    this.emailText = document.getElementById('email');
    this.password = document.getElementById('passwordLabel');
    this.passwordText = document.getElementById('password');
    // console.log(this.userNameText.value);
    // console.log(this.username);
    if (this.userNameText.value) {
      this.username.style.top = '10px';
      this.username.classList.remove('opacity-0');
      this.username.classList.add('opacity-100');
    } else {
      this.username.style.top = '50px';
      this.username.classList.remove('opacity-100');
      this.username.classList.add('opacity-0');
    }
    if (this.ageText.value) {
      this.age.style.top = '10px';
      this.age.classList.remove('opacity-0');
      this.age.classList.add('opacity-100');
    } else {
      this.age.style.top = '50px';
      this.age.classList.remove('opacity-100');
      this.age.classList.add('opacity-0');
    }
    if (this.emailText.value) {
      this.email.style.top = '10px';
      this.email.classList.remove('opacity-0');
      this.email.classList.add('opacity-100');
    } else {
      this.email.style.top = '50px';
      this.email.classList.remove('opacity-100');
      this.email.classList.add('opacity-0');
    }
    if (this.passwordText.value) {
      this.password.style.top = '10px';
      this.password.classList.remove('opacity-0');
      this.password.classList.add('opacity-100');
    } else {
      this.password.style.top = '50px';
      this.password.classList.remove('opacity-100');
      this.password.classList.add('opacity-0');
    }
  }
}
