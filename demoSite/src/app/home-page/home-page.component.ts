import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  constructor(public router: Router,private auth:AngularFireAuth) { }
  ngOnInit(): void {

    }

    loginUser() {
      this.router.navigate(['/login'])
    }

    registerUser() {
      this.router.navigate(['/register'])
    }
    logOutUser() {
      this.auth.signOut();
    }

}
