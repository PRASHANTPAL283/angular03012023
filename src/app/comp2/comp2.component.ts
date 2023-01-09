import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IndexService } from '../index.service';

@Component({
  selector: 'app-comp2',
  templateUrl: './comp2.component.html',
  styleUrls: ['./comp2.component.css']
})
export class Comp2Component implements OnInit {

  constructor(public service:IndexService) { }
data:any;
@Output() event:any=new EventEmitter<any>();
  ngOnInit(): void {
    console.log("comp2 data");
    console.log(this.data);
    this.service.getallusers().subscribe((data:any)=>{
      this.data=data;
    })

  }
  passdata(){
    this.event.emit(this.data);

  }
  

}
