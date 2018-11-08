import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from '../recipeRenita.model';
import { RecipeRenitaService } from '../recipeRenita.service';

@Component({
  selector: 'app-recipe-detailRenita',
  templateUrl: './recipe-detailRenita.component.html',
  styleUrls: ['./recipe-detailRenita.component.css']
})
export class RecipeDetailRenitaComponent implements OnInit {
  @Input() recipe:Recipe;

  constructor(private recipeRenitaService:RecipeRenitaService) { }

  ngOnInit() {
  }

  onAddShoppingList(){
    this.recipeRenitaService.addIngredientsShoppingList(this.recipe.ingredient);
  }

}
