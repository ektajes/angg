import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl, Validators, FormBuilder } from '@angular/forms';
// import { getMaxListeners } from 'process';
// import { LoginService } from '../login.service';

import { Router } from '@angular/router';
import { SignupService } from '../signup.service';
@Component({
  selector: 'app-login',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  signup!:FormGroup;
email:any;
chk:any;
loginval:any;
password:any;
msg:any;
signupval:any;
  constructor(private fb:FormBuilder, private service: SignupService, private router:Router) {
this.signup=this.fb.group({
  name:['', Validators.required],
email:['', Validators.required],
password:['', Validators.required],
password2:['', Validators.required],
check:[false, Validators.requiredTrue]
})
   }
   fieldsChange(values:any):void {
    console.log(values.currentTarget.checked);
   
    this.chk=true; this.msg="by clicking , you are accepting t and c";
  }
   onSubmit(signup:any):any

   {
// this.loginval=this.loginform.value;
// this.email=this.loginform.controls['email'].value;
// this.password=this.loginform.controls['password'].value;
// this.login(this.loginval);

this.signup=this.signup.value;
this.signupform(signup);
   }
 
signupform(signup:any){
this.service.createuser(signup).subscribe(res=>{
  console.log(res);
  alert("User created successfully, plz login to continue");
this.router.navigate(['/login']);
})
}
  ngOnInit(): void {
// localStorage.removeItem('username');

    }
  }

