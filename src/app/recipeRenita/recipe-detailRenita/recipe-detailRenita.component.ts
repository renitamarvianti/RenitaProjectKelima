import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from '../recipeRenita.model';

@Component({
  selector: 'app-recipe-detailRenita',
  templateUrl: './recipe-detailRenita.component.html',
  styleUrls: ['./recipe-detailRenita.component.css']
})
export class RecipeDetailRenitaComponent implements OnInit {
  @Input() recipe:Recipe;

  constructor() { }

  ngOnInit() {
  }

}
