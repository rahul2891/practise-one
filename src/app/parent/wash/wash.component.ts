import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { TeaProductsService } from '../../appServices/tea-products.service';

@Component({
  selector: 'app-wash',
  templateUrl: './wash.component.html',
  styleUrls: ['./wash.component.css']
})
export class WashComponent implements OnInit {

  @ViewChild('id') id: ElementRef;
  @ViewChild('name') name: ElementRef;
  @ViewChild('price') price: ElementRef;

  editMode: boolean = false;
  editIndex: number;

  constructor( private _teaProducts: TeaProductsService) { }
  dataTitle="Tea Products";
  fetching = false;
  products = [
    {
      id: 'p1',
      name: 'Green Tea',
      price: 543
    },
    {
      id: 'p2',
      name: 'Lemon Tea',
      price: 678
    },
    {
      id: 'p3',
      name: 'Ginger Tea',
      price: 879
    },
    {
      id: 'p4',
      name: 'Honey Tea',
      price: 1000
    },

  ]

  onAddProduct(id, name, price) {
    if(this.editMode) {
      this.products[this.editIndex] = {
        id: id.value,
        name: name.value,
        price: price.value
      }
      this.editMode = false;
      this.id.nativeElement.value = '';
    this.name.nativeElement.value = '';
    this.price.nativeElement.value = '';


    }else {
      this.products.push({
        id: id.value,
        name: name.value,
        price: price.value
      })
    }
    
  }

  onSaveProduct() {
    this._teaProducts.saveProducts(this.products).subscribe(
      (res) => console.log(res),
      (err) => console.log(err)
    )
  }

  onFetchProduct() {
    this.fetching =true;
    this._teaProducts.fetchProducts().subscribe(
      (res) => {
        console.log(res);
        const data = JSON.stringify(res);
        this.products = JSON.parse(data);
        this.fetching =false;

      },
      (err) => console.log(err)
    )
  }

  onDeleteProduct(id: number) {
   this.products.splice(id,1);
   this.onSaveProduct();
  }

  onEditProduct(index: number) {
    this.editMode = true;
    this.editIndex = index;
    this.id.nativeElement.value = this.products[index].id;
    this.name.nativeElement.value = this.products[index].name;
    this.price.nativeElement.value = this.products[index].price;

  }

  ngOnInit(): void {
    this.onFetchProduct();
  }

}
