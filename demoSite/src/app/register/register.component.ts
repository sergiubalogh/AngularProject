import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators,FormControl } from '@angular/forms';
import { auth } from 'firebase/app';


import { AngularFireAuthGuard, hasCustomClaim, redirectUnauthorizedTo, redirectLoggedInTo } from '@angular/fire/auth-guard';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  username:string;
  password:string;
  registerForm:FormGroup
  constructor(private fb:FormBuilder, private auth:AngularFireAuthGuard) { }

  ngOnInit(): void {
    this.registerForm = this.fb.group({
      email:new FormControl('',Validators.required),
      password:new FormControl('',[Validators.required,Validators.minLength(6)])

    })
  }

  createUser() {
    this.auth.
    console.log(this.registerForm.value)
  }
}
