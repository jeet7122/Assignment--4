import {Component, OnInit} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {ItemListComponent} from "./item-list/item-list.component";
import {ItemDescriptionComponent} from "./item-description/item-description.component";
import {Item} from "./models/item";
import {FruitsService} from "./services/fruits.service";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ItemListComponent, ItemDescriptionComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  title = 'Practice';
  selectedProduct?: Item;

  constructor(private fruitServices: FruitsService) {}
  ngOnInit():void{
    this.fruitServices.getProductsByID(1).subscribe({
      next: (product: Item | undefined) => this.selectedProduct = product,
      error: err => console.log('Error fetching product', err),
      complete: () => console.log('fetch complete')

    });

  }
  onItemSelected(item: Item): void{
    this.selectedProduct = item;
  }

}
