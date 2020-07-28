import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  productSelected:boolean = false;
  selectedProduct:string;
  addedProduct:any;

  onSelectProduct(product){
    this.productSelected = true;
    this.selectedProduct = product;
  }

  onAddProduct(){
    this.addedProduct = this.selectedProduct;
  }

}
