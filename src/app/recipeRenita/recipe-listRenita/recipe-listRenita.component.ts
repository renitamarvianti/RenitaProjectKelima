import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../recipeRenita.model';

@Component({
  selector: 'app-recipe-listRenita',
  templateUrl: './recipe-listRenita.component.html',
  styleUrls: ['./recipe-listRenita.component.css']
})
export class RecipeListRenitaComponent implements OnInit {

  @Output() recipeWasSelected=new EventEmitter<Recipe>();
  //property:class recipe
  recipes:Recipe[]=[
    new Recipe('A Test Recipe','This is simply a test','https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg'),
    new Recipe('A Test Recipe two','This is simply a test','../src/app/img/bakso.jpg'),
  ];
  constructor() { }

  ngOnInit() {
  }

  onRecipeSelected(recipe:Recipe){
    this.recipeWasSelected.emit(recipe);
  }
}
