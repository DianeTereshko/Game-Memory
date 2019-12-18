import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RaitingComponent } from './components/raiting/raiting.component';
import { RegisterComponent } from './components/register/register.component';
import { AboutComponent } from './components/about/about.component';
import { StartgameComponent } from './components/startgame/startgame.component';
import { WelcomeComponent } from './components/welcome/welcome.component';


const routes: Routes = [
  { path: '', component: WelcomeComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'raiting', component: RaitingComponent },
  { path: 'about', component: AboutComponent },
  { path: 'start', component: StartgameComponent }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
