import { Ingredient } from './../../shared/ingredient.mode';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingredient[] = [
    new Ingredient('Meat', 1),
    new Ingredient('Tomato', 2),
  ];
  constructor() {}

  ngOnInit(): void {}
}
