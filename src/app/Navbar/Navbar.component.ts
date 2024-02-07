import {
  Component,
  OnInit,
  AfterViewInit,
  HostBinding,
  HostListener,
} from '@angular/core';
declare var $: any; // Declare the jQuery variable

@Component({
  selector: 'app-Navbar',
  templateUrl: './Navbar.component.html',
  styleUrls: ['./Navbar.component.css'],
})
export class NavbarComponent implements OnInit, AfterViewInit {
  constructor() {}

  navList: any;
  isScrolled: boolean = false;

  ngOnInit() {}
  @HostBinding('class.scrolled')
  @HostListener('window:scroll', ['$event'])
  onWindowScroll(event: any) {
    const scrollOffset =
      window.pageYOffset ||
      document.documentElement.scrollTop ||
      document.body.scrollTop ||
      0;

    const scrollThreshold = 100;

    this.isScrolled = scrollOffset >= scrollThreshold;
  }
  ngAfterViewInit() {

    // $('ul.navbar-nav li a').click(function (this: any) {
    //   console.log($(this).prop('outerHTML'));
    //   $('ul.navbar-nav li a').removeClass('active');
    //   $(this).addClass('active');
    // });
    // $('a.navbar-brand').click(function (this: any) {
    //   console.log($(this).prop('outerHTML'));
    //   $('ul.navbar-nav li a').removeClass('active');
    // });
    
    // this.navList = document.querySelectorAll('ul.navbar-nav li a');
    // this.x.forEach((element: any) => {
    //   element.addEventListener('click', function(e: any) {
    //     console.log(e.target);
    //   });
    // });
  }
}
