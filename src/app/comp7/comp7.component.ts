import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-comp7',
  templateUrl: './comp7.component.html',
  styleUrls: ['./comp7.component.css']
})
export class Comp7Component implements OnInit {

  constructor() { }

  @Input() values:any=[];

  ngOnInit(): void {
  }

  counter:any=0;

  inc(){
    this.counter=this.counter+1;
  }
  dec(){
    this.counter=this.counter-1;
  }

}
