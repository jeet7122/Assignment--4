import {Component, Input} from '@angular/core';
import {Item} from "../models/item";
import {NgIf} from "@angular/common";

@Component({
  selector: 'app-item-description',
  standalone: true,
  imports: [
    NgIf
  ],
  templateUrl: './item-description.component.html',
  styleUrl: './item-description.component.scss'
})
export class ItemDescriptionComponent {
@Input() item?:Item;

toggleStatusCart(item:Item):void{
item.InCart = !item.InCart;
}

}
