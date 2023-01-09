import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { debounceTime, interval, switchMap } from 'rxjs';
import { IndexService } from '../index.service';

@Component({
  selector: 'app-comp5',
  templateUrl: './comp5.component.html',
  styleUrls: ['./comp5.component.css']
})
export class Comp5Component implements OnInit {

  constructor(public service:IndexService) { 
    
  }

  ngOnInit(): void {
    console.log("comp6 called")
  }
  allusers:any=[];
  searchValue:any;
  search:FormControl=new FormControl();
  showSearchData($event:any){
    //console.log($event.target.value);
    this.searchValue=$event.target.value;
    this.allusers= this.filterResults(this.searchValue);
    console.log(this.allusers)
    
  






  }

  filterResults(value:any):any{
    let result:any=[];
     this.service.getallusers().subscribe((data:any)=>{
    
   
      result=data.filter((val:any)=>{
        return val.name.toLocaleLowerCase().match(value.toLowerCase())||
        val.city.toLocaleLowerCase().match(value.toLowerCase())||
        val.age.toString().toLocaleLowerCase()===value.toString().toLowerCase()
      })

    })

   
console.log(result);
    return result;
  }

  receivedData($event: any){
this.allusers=$event;
console.log(this.allusers);

  }

}
