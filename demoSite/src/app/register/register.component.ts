import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators,FormControl } from '@angular/forms';
import { auth } from 'firebase/app';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm:FormGroup
  constructor(private fb:FormBuilder, public auth:AngularFireAuth, private router: Router) { }

  ngOnInit(): void {
    this.registerForm = this.fb.group({
      email:new FormControl('',Validators.required),
      password:new FormControl('',[Validators.required,Validators.minLength(6)])

    })
  }

  createUser() {
    const {email,password} = this.registerForm.value;
    this.auth.createUserWithEmailAndPassword(email,password).then(user => {
      console.log(user);
      this.router.navigate(['']);
    })
   
  }
}
