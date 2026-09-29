import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Sortings } from '../../sortings/sortings';
import { Filtercomponent } from '../../filtercomponent/filtercomponent';
@Component({
  selector: 'app-products',
  imports: [CommonModule,Sortings],
  templateUrl: './products.html',
  styleUrl: './products.css'
})
export class Products {
productlist: any []=[
  {id:1,name:'Sachin',mobile:'894943944',email:'hello@123.com'},
  {id:2,name:'achin',mobile:'894943944',email:'hello@123.com'},
  {id:3,name:'chin',mobile:'894943944',email:'hello@123.com'},
  {id:4,name:'hin',mobile:'894943944',email:'hello@123.com'},
  {id:5,name:'iiin',mobile:'894943944',email:'hello@123.com'},
  {id:6,name:'nnin',mobile:'894943944',email:'hello@123.com'},
  {id:7,name:'Sayhhin',mobile:'894943944',email:'hello@123.com'},
  {id:8,name:'Sacyfgin',mobile:'894943944',email:'hello@123.com'},
  {id:9,name:'Sachidghn',mobile:'894943944',email:'hello@123.com'},
  {id:10,name:'Sachinyht',mobile:'894943944',email:'hello@123.com'},
]

  products: string[] = ['Laptop', 'Phone', 'Tablet', 'Camera'];
  filteredProducts: string[] = [...this.products];

  filterProducts(search: string) {
    this.filteredProducts = this.products.filter(p =>
      p.toLowerCase().includes(search.toLowerCase())
    );
  }
}
