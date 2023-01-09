import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Comp6Component } from './comp6.component';



@NgModule({
  declarations: [Comp6Component],
  imports: [
    CommonModule
  ],
  exports:[Comp6Component]
})
export class Comp6Module { 
  constructor(){
    console.log("component 6 called beacuse lazy loading is not present>>>>")
  }
}
