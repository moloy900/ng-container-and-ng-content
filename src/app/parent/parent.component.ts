import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css'],
})
export class ParentComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  proSelected: boolean = false;
  selectPro: string = '';
  addedProduct: any;

  onSelectProduct(product: string) {
    this.proSelected = true;
    this.selectPro = product;
  }

  onAddedProduct(proData: any) {
    this.addedProduct = proData;
  }
}
