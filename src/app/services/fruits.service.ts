import { Injectable } from '@angular/core';
import {productList} from "../Data/mock-content";
import {Observable, of} from "rxjs";
import {Item} from "../models/item";


@Injectable({
  providedIn: 'root'
})
export class FruitsService {

  constructor() { }
  getProducts(): Observable<Item[]>{
    return of(productList);
  };
  addItem(newItem : Item): Observable<Item [] >{
    productList.push(newItem)
    return of(productList);
  }
  getProductsByID(id:number):Observable<Item | undefined>{
    const product = productList.find(item => item.id === id)
    return of(product);
  }
  updateProduct(updatedItem: Item):Observable<Item[]>{
    const index = productList.findIndex(item => item.id === updatedItem.id)
    if(index !== -1){
        productList[index] = updatedItem;
    }
    return of(productList);
  }
  deleteProduct(id:number):Observable<Item[]>{
    const index = productList.filter(item => item.id === id);
    return of(productList);
  }

}
