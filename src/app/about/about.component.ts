import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
})
export class AboutComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  showProduct: boolean = true;
  products = [
    { name: 'Laptop' },
    { name: 'TV' },
    { name: 'Washing Machine' },
    { name: 'Mobile' },
  ];
}
