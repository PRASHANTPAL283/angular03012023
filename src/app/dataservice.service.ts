import { Injectable } from '@angular/core';
import { SelectControlValueAccessor } from '@angular/forms';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataserviceService {

  constructor() { }

   public value:any=new BehaviorSubject<any>([]);

   setValueData(value1:any){
    this.value.next(value1);
   }
   getValueData(){
    return this.value.asObservable();
   }


}
