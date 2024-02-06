import { Component, OnInit, AfterViewInit } from '@angular/core';
declare var $: any; // Declare the jQuery variable

@Component({
  selector: 'app-Navbar',
  templateUrl: './Navbar.component.html',
  styleUrls: ['./Navbar.component.css'],
})
export class NavbarComponent implements OnInit, AfterViewInit {
  constructor() {}

  ngOnInit() {}
  ngAfterViewInit() {
    $('ul.navbar-nav li a').click(function(this: HTMLAnchorElement) {
      console.log($(this).prop('outerHTML'));
      $('ul.navbar-nav li a').removeClass('active');
      $(this).addClass('active');
    });
    $('a.navbar-brand').click(function(this: HTMLAnchorElement) {
      console.log($(this).prop('outerHTML'));
      $('ul.navbar-nav li a').removeClass('active');
    });
  }
}