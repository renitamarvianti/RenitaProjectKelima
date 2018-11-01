import { Component, OnInit } from '@angular/core';
import { Recipe } from './recipeRenita.model';

@Component({
  selector: 'app-recipeRenita',
  templateUrl: './recipeRenita.component.html',
  styleUrls: ['./recipeRenita.component.css']
})
export class RecipeRenitaComponent implements OnInit {
  selectedRecipe:Recipe;
  
  constructor() { }

  ngOnInit() {
  }

}
