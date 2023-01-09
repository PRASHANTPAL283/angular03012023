import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Comp2Component } from './comp2/comp2.component';
import { Comp5Component } from './comp5/comp5.component';
import { Comp6Component } from './comp6/comp6.component';
import { Component1Component } from './component1/component1.component';
import { FormsComponent } from './forms/forms.component';
import { NavbarComponent } from './navbar/navbar.component';

const routes: Routes = [
  {path:'comp1',component:Component1Component},
  {path:'comp5',component:Comp5Component},
  {path:'comp6',component:Comp6Component},
  {path:'comp1/:id',component:Component1Component},
  {path:'comp2',component:Comp2Component},
  {path:'navbar',component:NavbarComponent},
  {path:'form',component:FormsComponent},
  {path:'',redirectTo:'navbar',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
