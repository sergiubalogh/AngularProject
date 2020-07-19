import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators,FormControl } from '@angular/forms';
import { auth } from 'firebase/app';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username:string;
  password:string;
  registerForm:FormGroup
  constructor(private fb:FormBuilder , public auth:AngularFireAuth, private router: Router) { }

  ngOnInit(): void {
    this.registerForm = this.fb.group({
      email:new FormControl('',Validators.required),
      password:new FormControl('',[Validators.required,Validators.minLength(6)])

    })
  }
  onLoginInPress() : void {
      const {email,password} = this.registerForm.value;
      this.auth.signInWithEmailAndPassword(email,password).then((user) => {
        console.log(user);
      this.router.navigate([""]);
    })
  }
}
