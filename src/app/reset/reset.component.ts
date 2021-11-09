import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl, Validators, FormBuilder } from '@angular/forms';
// // import { getMaxListeners } from 'process';
// import { LoginService } from '../login.service';
import { SignupService } from '../signup.service';
import { Router } from '@angular/router';
// import { SignupService } from './../signup.service';
@Component({
  selector: 'app-reset',
  templateUrl: './reset.component.html',
  styleUrls: ['./reset.component.css']
})
export class ResetComponent implements OnInit {

  reset!:FormGroup;
  email:any;
  chk:any;
  loginval:any;
  password:any;
  msg:any;
    constructor(private fb:FormBuilder, private ser:SignupService, private router:Router) {
  this.reset=this.fb.group({
  email:['', Validators.required],

  })
}

  ngOnInit(): void {
  }
  onSubmit(){
    this.ser.getUser().subscribe(res=>{
      const user= res.find((a:any)=>{
        return a.email===this.reset.value.email;
      })
        if(user){
          this.router.navigate(['/change']);
        }
        else{
          alert("please enter valid email address");
        }
      })
    
  }
  resetr(){

  }
}
