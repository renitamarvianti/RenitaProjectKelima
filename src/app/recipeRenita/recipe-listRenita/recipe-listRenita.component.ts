import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../recipeRenita.model';
import { RecipeRenitaService } from '../recipeRenita.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-recipe-listRenita',
  templateUrl: './recipe-listRenita.component.html',
  styleUrls: ['./recipe-listRenita.component.css']
})
export class RecipeListRenitaComponent implements OnInit {

  //@Output() recipeWasSelected=new EventEmitter<Recipe>();
  recipes:Recipe[];
  //property:class recipe
 
  constructor(private recipeRenitaService:RecipeRenitaService,
              private router:Router,
              private route:ActivatedRoute) { }

  ngOnInit() {
    this.recipes=this.recipeRenitaService.getRecipes();
  }

  onNewRecipe(){
    this.router.navigate(['new'],{relativeTo:this.route})
  }
  //onRecipeSelected(recipe:Recipe){
    //this.recipeWasSelected.emit(recipe);
  //}
  
}
