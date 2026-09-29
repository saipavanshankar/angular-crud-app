import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-sortings',
  imports: [CommonModule],
  templateUrl: './sortings.html',
  styleUrl: './sortings.css'
})
export class Sortings {
@Input() productlist=<any>{};
// constructor(){
// }

  students = [
    { name: 'Ravi', age: 21 },
    { name: 'Aashish', age: 22 },
    { name: 'Sneha', age: 23 }
  ];
  sortbyname(){
    this.students.sort((a,b)=>a.name.localeCompare(b.name));
  }
  sortbyage(){
    this.students.sort((a,b)=>a.age-b.age);
  }

  sortAsc = true;

toggleSortByName() {
  this.students.sort((a, b) => 
    this.sortAsc ? a.name.localeCompare(b.name) : b.name.localeCompare(a.name)
  );
  this.sortAsc = !this.sortAsc;
}


}
