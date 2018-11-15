import { NgModule } from '@angular/core';
import { Routes,RouterModule} from '@angular/router';
import { RecipeRenitaComponent } from './recipeRenita/recipeRenita.component';
import { ShoppingListRenitaComponent } from './shopping-listRenita/shopping-listRenita.component';
import { RecipeStartRenitaComponent } from './recipeRenita/recipe-startRenita/recipe-startRenita.component';
import { RecipeDetailRenitaComponent } from './recipeRenita/recipe-detailRenita/recipe-detailRenita.component';
import { RecipeEditRenitaComponent } from './recipeRenita/recipe-editRenita/recipe-editRenita.component';

const appRoutes=[
    { path:'',redirectTo:'/recipes',pathMatch:'full'},
    { path:'recipes',component:RecipeRenitaComponent,children:[
        { path:'',component:RecipeStartRenitaComponent },
        { path:'new',component:RecipeEditRenitaComponent},
        { path:':id',component:RecipeDetailRenitaComponent},
        { path:':id/edit',component:RecipeEditRenitaComponent},
    ]},
    { path:'shopping-listRenita',component:ShoppingListRenitaComponent},
];

@NgModule({
    imports : [RouterModule.forRoot(appRoutes)],
    exports : [RouterModule]
})

export class AppRoutingModule{}