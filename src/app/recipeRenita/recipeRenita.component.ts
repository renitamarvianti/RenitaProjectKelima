import { Component, OnInit } from '@angular/core';
import { Recipe } from './recipeRenita.model';
import { RecipeRenitaService } from './recipeRenita.service';

@Component({
  selector: 'app-recipeRenita',
  templateUrl: './recipeRenita.component.html',
  styleUrls: ['./recipeRenita.component.css'],
  providers: [RecipeRenitaService],
})
export class RecipeRenitaComponent implements OnInit {
  selectedRecipe:Recipe;
  
  constructor(private recipeRenitaService:RecipeRenitaService) { }

  ngOnInit() {
    this.recipeRenitaService.recipeRenitaSelected
    .subscribe(
      (recipe:Recipe)=>{
        this.selectedRecipe=recipe;
      }
    )
  }

}
