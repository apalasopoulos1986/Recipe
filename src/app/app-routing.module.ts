import { AuthGuard } from './auth/auth.guard';
import { RecipesResolverService } from './recipes/recipes-resolver.service';
import { RecipeEditComponent } from './recipes/recipe-edit/recipe-edit.component';


import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RecipesComponent } from './recipes/recipes.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';

import { AuthComponent } from './auth/auth.component';

const appRoutes:Routes=[
    {path:'', redirectTo:'/recipes', pathMatch:'full'},
    {path:'shopping-list', component:ShoppingListComponent},
    {path: 'auth', component:AuthComponent}
];
@NgModule({
    imports:[RouterModule.forRoot(appRoutes)],
    exports:[RouterModule]

})
export class AppRoutingModule{

}