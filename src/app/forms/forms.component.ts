import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent implements OnInit {

  constructor(public fb:FormBuilder) { }

  ngOnInit(): void {
  }
  @ViewChild("name") formchild:ElementRef|any;
  @ViewChild("email") formemail:ElementRef|any;
  @ViewChild("message") formmessage:ElementRef|any;
  @ViewChild("subject") formsubject:ElementRef|any;

  userModel=this.fb.group({
    name:['',Validators.required],
    email:['',[Validators.required,Validators.email]],
    message:['',Validators.required],
    subject:['',Validators.required]
  })
  getName(){
    return this.userModel.get('name');
  }
  getEmail(){
    return this.userModel.get('email');
  }
  getMessage(){
    return this.userModel.get('message');
  }
  getSubject(){
    return this.userModel.get('subject');
  }

  sendData(){
    if(this.getName()?.invalid){
      this.formchild.nativeElement.setAttribute('style','border:1px solid red')

    }
    else if(this.getEmail()?.invalid){
      this.formemail.nativeElement.setAttribute('style','border:1px solid red')
      
    }
    console.log(this.userModel.value);
    this.userModel.reset();
  }


}
