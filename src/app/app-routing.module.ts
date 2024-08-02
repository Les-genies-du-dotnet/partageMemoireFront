import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { CreateExpertComponent } from './components/create-expert/create-expert.component';
import { ListExpertComponent } from './components/list-expert/list-expert.component';
import { EditExpertComponent } from './components/edit-expert/edit-expert.component';
import { HomeComponent } from './components/shared/home/home.component';
import { WelcomeComponent } from './components/welcome/welcome.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  {path:'login', component:LoginComponent},
 
  {path: '',
    component:HomeComponent,
    children: [
      {path:'welcome',component:WelcomeComponent},
      { path: 'createExpert', component: CreateExpertComponent},
      { path: 'editExpert', component: EditExpertComponent},
      { path: 'listExpert', component: ListExpertComponent },
     
    ]
  }
    
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
