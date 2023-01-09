import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { error } from 'console';
import { Observable } from 'rxjs';
import { DataserviceService } from '../dataservice.service';
import { IndexService } from '../index.service';
import { Students } from '../students';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(public service:IndexService, public fb:FormBuilder,public dataservice:DataserviceService,public router:Router) { }
allusers:any=[];
  ngOnInit(): void {
    this.service.getallusers().subscribe((val:any)=>{
      this.allusers=val;
      this.dataservice.setValueData(this.allusers);

    })
  }

  UserModel:any=this.fb.group({
    name:['',[Validators.required,Validators.minLength(3)]],
    age:['',[Validators.required,Validators.pattern('^(?:1[01][0-9]|120|1[7-9]|[2-9][0-9])$')]],
    city:['',Validators.required]
  })

  getName(){
    return this.UserModel.get('name');
  }
  getAge(){
    return this.UserModel.get('age');
  }
  getCity(){
    return this.UserModel.get('city');
  }
  searchData:any='';

  getSearchResult(value:any){
    this.searchData=(value.target as HTMLInputElement)?.value;
    console.log(this.searchData)
    if(this.searchData===null||this.searchData===''){
      this.ngOnInit();
    }
    else{
   
      this.service.getallusers().subscribe((data:any)=>{
        this.allusers=data.filter((val:any)=>{
          return val.name.toLocaleLowerCase().match(this.searchData.toLowerCase())||
          val.city.toLocaleLowerCase().match(this.searchData.toLowerCase())||
          val.age.toString().toLocaleLowerCase()===this.searchData.toString().toLowerCase()
        })
      
      })
      
      
    
  }

  }
  errorMessage:any=null;

submitform(){
  let stu=new Students();
  stu.setName(this.getName().value);
  stu.setAge(this.getAge().value);
  stu.setCity(this.getCity().value)
  console.log(stu);
  this.service.addnewuser(stu).subscribe({
    next:(res:any)=>{
      if(res.age!=null||res.age!==undefined){
      alert(res.age)
      }
      else{
      alert("error reported "+res.message)
      }
    },
    error:(err:any)=>alert(err.message+" this error occurred"),
    complete:()=>console.log("completed")

  }

  )
   

  setTimeout(()=>{
    this.UserModel.reset();
    this.ngOnInit();
  },1000)
  
}

shifttocomp1(val:any){
  let data:any;
  this.allusers.forEach((element: any) => {
    if(element.age===val){
      data=element
    }
  });
  console.log(data)
  this.router.navigate(['comp1',JSON.stringify(data)]);


}

removeItems(id:any){
 this.service.removeUser(id).subscribe({
  next:(res:String|any)=>{
    alert(res);
  },
  error:(err:any)=>{
    alert(err.message);
  },
  complete:()=>{
    console.log("process ended")
  }
 })

 setTimeout(()=>{
  this.ngOnInit();
 },500)

}
selectedData:any;

getselectedValue(val:any){
  console.log(val.target.value);
  this.selectedData=val.target.value;
}




}
