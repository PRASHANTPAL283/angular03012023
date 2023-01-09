import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-component1',
  templateUrl: './component1.component.html',
  styleUrls: ['./component1.component.css']
})
export class Component1Component implements OnInit {

  constructor(public route:ActivatedRoute) { }
value:any;
message:any=[];
  ngOnInit(): void {
   let data:any;
   data=this.route.snapshot.paramMap.get('id');
   console.log(data)
   this.value=JSON.parse(data);
  }
  receivedMessage($event:any){
    this.message=$event;
  }

}
