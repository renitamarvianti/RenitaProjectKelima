import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../../recipeRenita.model';

@Component({
  selector: 'app-recipe-itemRenita',
  templateUrl: './recipe-itemRenita.component.html',
  styleUrls: ['./recipe-itemRenita.component.css']
})
export class RecipeItemRenitaComponent implements OnInit {

  @Input() recipe:Recipe;
  @Output() recipeSelected=new EventEmitter<void>();

  constructor() { }

  ngOnInit() {
  }

  onSelected(){
    this.recipeSelected.emit();
  }
}
