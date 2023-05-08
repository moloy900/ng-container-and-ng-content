import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css'],
})
export class ChildComponent implements OnInit {

  // input() child to parent communication
  
  @Input() productSelected: boolean = false;
  @Input() selectedProduct: string = '';

  // output() parent to child communication

  @Output() addedProduct = new EventEmitter<any>();

  onAddProduct() {
    this.addedProduct.emit(this.selectedProduct);
  }

  constructor() {}

  ngOnInit(): void {}
}
