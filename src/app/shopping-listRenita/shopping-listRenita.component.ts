import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../sharedRenita/ingredientRenita.model';
import { ShoppingListRenitaService } from '../shopping-listRenita/shopping-listRenita.service';

@Component({
  selector: 'app-shopping-listRenita',
  templateUrl: './shopping-listRenita.component.html',
  styleUrls: ['./shopping-listRenita.component.css']
})
export class ShoppingListRenitaComponent implements OnInit {

  ingredients:Ingredient[]
  //=[
    //new Ingredient('Apples',23),
    //new Ingredient('Tomato',10),
  //];

  constructor(private slsService:ShoppingListRenitaService) { }

  ngOnInit() {
    this.ingredients=this.slsService.getIngredient();
    this.slsService.IngredientChange
    .subscribe(
      (Ingredient:Ingredient[])=>{
        this.ingredients=Ingredient;
      }
    )
  }

  //onIngredientAdded(ingredient:Ingredient)
  //{
  //this.ingredients.push(ingredient);
//}
}
