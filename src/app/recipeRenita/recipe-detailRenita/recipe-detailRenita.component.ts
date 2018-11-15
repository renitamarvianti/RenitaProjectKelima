import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from '../recipeRenita.model';
import { RecipeRenitaService } from '../recipeRenita.service';
import { ActivatedRoute } from '@angular/router';
import { Params } from '@angular/router';

@Component({
  selector: 'app-recipe-detailRenita',
  templateUrl: './recipe-detailRenita.component.html',
  styleUrls: ['./recipe-detailRenita.component.css']
})
export class RecipeDetailRenitaComponent implements OnInit {
  //@Input() recipe:Recipe;
  recipe:Recipe;
  id:number;

  constructor(private recipeRenitaService:RecipeRenitaService,
              private route:ActivatedRoute) { }

  ngOnInit() {
    this.route.params
    .subscribe(
      (params:Params)=>{
        this.id=+params['id'];
        this.recipe=this.recipeRenitaService.getRecipe(this.id);
      }
    )
  }

  onAddShoppingList(){
    this.recipeRenitaService.addIngredientsShoppingList(this.recipe.ingredient);
  }

}
