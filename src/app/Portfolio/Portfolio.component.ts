import { Component, OnInit, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-Portfolio',
  templateUrl: './Portfolio.component.html',
  styleUrls: ['./Portfolio.component.css'],
})
export class PortfolioComponent implements OnInit, AfterViewInit {
  items: any;

  constructor() {}

  ngOnInit() {}

  ngAfterViewInit() {
    this.items = document.querySelectorAll('.item');
    console.log(this.items);
    this.items.forEach((item: any) => {
      item.addEventListener('click', (e: any) => {
        console.log(e.target);
      });
    });
  }
}
