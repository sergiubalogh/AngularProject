import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AppComponent } from './app.component';
import { AngularFireAuthGuard,redirectLoggedInTo  } from '@angular/fire/auth-guard';
import { HomePageComponent } from './home-page/home-page.component';

const redirectLogginToInitial = () => redirectLoggedInTo([''])

const routes: Routes = [
  {path:'', redirectTo: '/home',  pathMatch: 'full' , canActivate:[AngularFireAuthGuard] ,  data: { authGuardPipe: redirectLogginToInitial }},
  {path:'home' , component:HomePageComponent},
  {path:'login', component:LoginComponent},
  {path:"register", component:RegisterComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponent = [LoginComponent,RegisterComponent,AppComponent]
