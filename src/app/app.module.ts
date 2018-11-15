import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule, Http } from '@angular/http';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HeaderRenitaComponent } from './headerRenita/headerRenita.component';
import { RecipeRenitaComponent } from './recipeRenita/recipeRenita.component';
import { ShoppingListRenitaComponent } from './shopping-listRenita/shopping-listRenita.component';
import { RecipeDetailRenitaComponent } from './recipeRenita/recipe-detailRenita/recipe-detailRenita.component';
import { RecipeListRenitaComponent } from './recipeRenita/recipe-listRenita/recipe-listRenita.component';
import { RecipeItemRenitaComponent } from './recipeRenita/recipe-listRenita/recipe-itemRenita/recipe-itemRenita.component';
import { ShoppingEditRenitaComponent } from './shopping-listRenita/shopping-editRenita/shopping-editRenita.component';
import { DropdownRenitaDirective } from './sharedRenita/dropdownRenita.directive';
import { ShoppingListRenitaService } from './shopping-listRenita/shopping-listRenita.service';
import { RecipeStartRenitaComponent } from './recipeRenita/recipe-startRenita/recipe-startRenita.component';
import { RecipeEditRenitaComponent } from './recipeRenita/recipe-editRenita/recipe-editRenita.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderRenitaComponent,
    RecipeRenitaComponent,
    ShoppingListRenitaComponent,
    RecipeListRenitaComponent,
    RecipeDetailRenitaComponent,
    RecipeItemRenitaComponent,
    ShoppingEditRenitaComponent,
    DropdownRenitaDirective,
    RecipeStartRenitaComponent,
    RecipeEditRenitaComponent
],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [ShoppingListRenitaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
