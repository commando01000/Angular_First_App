import { Component, OnInit, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-Portfolio',
  templateUrl: './Portfolio.component.html',
  styleUrls: ['./Portfolio.component.css'],
})
export class PortfolioComponent implements OnInit, AfterViewInit {
  items: any;
  myImage: any;
  myCard: any;
  myCardLayer: any;
  constructor() {}

  ngOnInit() {}

  ngAfterViewInit() {
    this.items = document.querySelectorAll('.item');
    this.myCard = document.querySelector('.my-card');
    this.myCardLayer = document.querySelector('.my-card-layer');
    // console.log(this.myCard);

    // console.log(this.items);
    this.items.forEach((element: any) => {
      element.addEventListener('click', (e: any) => {
        // console.log(element);
        // console.log(element.querySelector('img').getAttribute('src'));
        this.myImage = element.querySelector('img').getAttribute('src');
        this.myCard.classList.remove('d-none');
        this.myCard.classList.add('d-flex');
        this.myCardLayer.classList.remove('d-none');
        // console.log(this.myCard);
        e.stopPropagation();
      });
    });
    // Add a global event listener to handle clicks anywhere in the document
    document.addEventListener('click', (e: any) => {
      this.myCard.classList.remove('d-flex');
      this.myCard.classList.add('d-none');
      this.myCardLayer.classList.add('d-none');
      e.stopPropagation();
    });
  }
}
