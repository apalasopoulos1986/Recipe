import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import {NgModule} from '@angular/core';

import { ShoppingListComponent } from './shopping-list.component';
import { ShoppingEditComponent } from './shopping-edit/shopping-edit.component';

@NgModule({
    declarations:[
        ShoppingListComponent,
        ShoppingEditComponent,
    ],
    imports:[
        CommonModule,
        FormsModule,
        RouterModule.forChild([
        {path:'shopping-list', component:ShoppingListComponent},
    ])

    ]
})
export class ShoppingListModule{}