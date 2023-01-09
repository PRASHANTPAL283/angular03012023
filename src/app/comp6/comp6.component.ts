import { Component, ContentChild, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { map, of } from 'rxjs';
import { Comp7Component } from '../comp7/comp7.component';
import { IndexService } from '../index.service';
import { Manager, Students } from '../students';


@Component({
  selector: 'app-comp6',
  templateUrl: './comp6.component.html',
  styleUrls: ['./comp6.component.css']
})
export class Comp6Component implements OnInit {

  constructor(public service:IndexService) {
    console.log("component 6 called")
   }

  

  ngOnInit(): void {
    this.service.getJsonData()
    .pipe( 
      map((val:any)=>val.filter((val: { id: number; })=>val.id%2==0))
    )
   
    .subscribe( { 
      next:(val:any)=>{
        console.log(val);
      },
      error:(err:any)=>{
        console.log(err.message);
      },
      complete:()=>{
        console.log("request is completed");
      }

      
    })
   
  }
  @Output() output:any=new EventEmitter<any>();
  @ContentChild("head") contentHeader:ElementRef|any;
  @ViewChild("header1") viewChild:ElementRef|any;
  @ViewChild("child") childSelector:Comp7Component|any;


 ngAfterViewInit(){
  console.log(this.viewChild)
 }

 increase(){
  this.childSelector.inc();

 }
 descrease(){
  this.childSelector.dec();

 }


sendOutputData(){
  this.viewChild.nativeElement.innerHTML="programme executed";
  this.viewChild.nativeElement.style.color="red";
  this.viewChild.nativeElement.setAttribute('style','color:blue;font-Size:40px;')
  let dat:any=[];
  this.service.getallusers().subscribe((data:any)=>{
    dat=data;
    console.log(dat)
    this.output.emit(dat);
  })
 
}
takesum(a:number,b:number,arr:number[]):number{
  let x:number;
  x=a+b+arr.reduce((a,b)=>a+b);
  return x;

}
getsum(){
  let stu=new Students("jj",1,"ejeuhf");
  console.log(stu);
  stu.setAge(12);
  stu.setCity("kanpur");
  stu.setName("dhola");
  console.log(stu.getName())

  let manager=new Manager("jyoti",89,"lahore");
  console.log(manager);
  
  let a:number=10;
  let b:number=100;
  let c=[10,20,20];
  let result:number=this.takesum(a,b,c);
  console.log(result);


}
topproducts:any=[{
  "name":'bike',
  "price":2000
},{
  "name":'cycle',
  "price":1000
},
{
  "name":'scooter',
  "price":23000
}]

products:any=[{
  "name":'ps5',
  "price":200
},{
  "name":'deo',
  "price":100
},
{
  "name":'pants',
  "price":2000
}]
showexecution(){
 
}


}
