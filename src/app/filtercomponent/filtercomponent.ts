import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-filtercomponent',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './filtercomponent.html',
  styleUrls: ['./filtercomponent.css']
})
export class Filtercomponent {
  searchTerm: string = '';

  // You can change this list to anything you want
  items: string[] = ['India', 'Nepal', 'Bhutan', 'China', 'Japan', 'USA', 'Canada'];
  filteredItems: string[] = [...this.items];

  onInputChange() {
    const search = this.searchTerm.toLowerCase();
    this.filteredItems = this.items.filter(item =>
      item.toLowerCase().includes(search)
    );
  }
}
