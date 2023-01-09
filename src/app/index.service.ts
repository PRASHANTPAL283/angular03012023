import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import { catchError, filter, map, throwError } from 'rxjs';
const url="http://localhost:9000/allusers"
const post_url="http://localhost:9001/addusernew";
const del_url="http://localhost:9000/deleteUser"
const json_url="https://jsonplaceholder.typicode.com/posts";
@Injectable({
  providedIn: 'root'
})
export class IndexService {
  

  constructor(public http:HttpClient) { }

  getallusers(){
    return this.http.get(url);
  }

  addnewuser(val:any){
    return this.http.post(post_url,val).pipe( 
      catchError(this.handleError)
    )
  }

  removeUser(val:any){
    let url:any=`${del_url}/${val}`;
    return this.http.get(url).pipe( 
      catchError(this.handleError)
    )

  }

  getJsonData(){
   return this.http.get(json_url).pipe( 
    
    map((res:any)=>res.map((data:any)=>{
     return{
      id:data.userId,
      name:data.title,
      body:data.body,
      status:data.completed
     }
      
    })),
   
    catchError(this.handleError)
   )
  }

  public handleError(error:HttpErrorResponse){
    if(error.status===0){
      console.error('An error occurred :',error.error);
    }
    else{
      console.error(`Backend returned error ${error.status}, body was:`,error.error);
    }
    return throwError(()=>new Error(error.error.message));
  }

  
}
