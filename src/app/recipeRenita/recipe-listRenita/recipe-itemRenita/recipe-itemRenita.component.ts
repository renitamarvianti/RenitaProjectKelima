import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../../recipeRenita.model';
import { RecipeRenitaService } from '../../recipeRenita.service';

@Component({
  selector: 'app-recipe-itemRenita',
  templateUrl: './recipe-itemRenita.component.html',
  styleUrls: ['./recipe-itemRenita.component.css']
})
export class RecipeItemRenitaComponent implements OnInit {

  @Input() recipe:Recipe;
  @Input() index:number;
  //@Output() recipeSelected=new EventEmitter<void>();

  //constructor(private recipeRenitaService:RecipeRenitaService) { }

  ngOnInit() {
  }

  //onSelected(){
    // //this.recipeSelected.emit();
    //this.recipeRenitaService.recipeRenitaSelected.emit(this.recipe);
  //}
}
