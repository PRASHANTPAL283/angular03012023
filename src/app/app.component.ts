import { Component, EventEmitter, Output } from '@angular/core';
import { DataserviceService } from './dataservice.service';
import { IndexService } from './index.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular03012023';
  constructor(public service:DataserviceService, public data:IndexService){

  }
  pvalue:any=[];
 receivedMessage($event:any){
  this.pvalue=$event;
  console.log(this.pvalue);
 }

  allusers:any=[];
  alluser:any=[]
  ngOnInit() {
    this.service.getValueData().subscribe((val:any)=>{
      this.allusers=val;
    })

    this.data.getallusers().subscribe((d:any)=>{
      this.alluser=d;
      console.log(this.alluser)
    })

    
    
  }

  flag:any=0;
  setflag(val:any){
    this.flag=val;

  }
}
