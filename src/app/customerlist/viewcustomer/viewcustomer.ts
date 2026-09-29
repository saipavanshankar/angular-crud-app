import { Component } from '@angular/core';
import { CommonModule, NgForOf } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';



@Component({
  selector: 'app-viewcustomer',
  standalone: true,  
  imports: [FormsModule, CommonModule, RouterModule],
  templateUrl: './viewcustomer.html',
  styleUrl: './viewcustomer.css'
})
export class Viewcustomer {
customerList: any []=[
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
constructor(private router: Router){}
navigatetoedit(id: number)
{
this.router.navigateByUrl('/addupdatecustomer/'+id)
}
}
