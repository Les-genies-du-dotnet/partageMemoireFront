import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { NavbarComponent } from './pages/navbar/navbar.component';
import { CreateExpertComponent } from './pages/create-expert/create-expert.component';

import { ListExpertComponent } from './pages/list-expert/list-expert.component';
import { EditExpertComponent } from './pages/edit-expert/edit-expert.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  {path:'login', component:LoginComponent},
 
  {path: '',
    component: NavbarComponent,
    children: [
      { path: 'create', component: CreateExpertComponent},
      { path: 'edit', component: EditExpertComponent},
      { path: 'list', component: ListExpertComponent },
     
    ]
  }
    
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
