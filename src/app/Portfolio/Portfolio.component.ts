import { Component, OnInit, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-Portfolio',
  templateUrl: './Portfolio.component.html',
  styleUrls: ['./Portfolio.component.css'],
})
export class PortfolioComponent implements OnInit {
  item: any;

  constructor() {}

  ngOnInit() {}

  AfterViewInit() {
      this.item = document.querySelectorAll('.item');
  }
}
