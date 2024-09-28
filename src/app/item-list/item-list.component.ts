import {Component, Input} from '@angular/core';
import {Item} from "../models/item";
import {NgForOf} from "@angular/common";
import {ItemDescriptionComponent} from "../item-description/item-description.component";
import {FruitsService} from "../services/fruits.service";

@Component({
  selector: 'app-item-list',
  standalone: true,
  imports: [
    NgForOf,
    ItemDescriptionComponent
  ],
  templateUrl: './item-list.component.html',
  styleUrl: './item-list.component.scss'
})
export class ItemListComponent {
  public productList : Item [] = [];
  selectedProduct?: Item;
  constructor(private fruitService: FruitsService) {}

  ngOnInit(){
    this.fruitService.getProducts().subscribe({
      next:(data: Item[]) => this.productList = data,
      error: err => console.log("Error fetching data", err),
      complete: () => console.log("Fetch Complete!")

    });
  }
selectItem(item:Item): void{
this.selectedProduct = item;
}

}
