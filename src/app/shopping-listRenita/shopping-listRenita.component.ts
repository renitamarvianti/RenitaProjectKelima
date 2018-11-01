import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../sharedRenita/ingredientRenita.model';


@Component({
  selector: 'app-shopping-listRenita',
  templateUrl: './shopping-listRenita.component.html',
  styleUrls: ['./shopping-listRenita.component.css']
})
export class ShoppingListRenitaComponent implements OnInit {

  ingredients:Ingredient[]=[
    new Ingredient('Apples',23),
    new Ingredient('Tomato',10),
  ];

  constructor() { }

  ngOnInit() {
  }
onIngredientAdded(ingredient:Ingredient)
{
  this.ingredients.push(ingredient);
}
}
