import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { HeaderSharedComponent } from './components/shared/header-shared/header-shared.component';
import { SidenavComponent } from './components/shared/sidenav/sidenav.component';
import { HomeComponent } from './components/shared/home/home.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    AppComponent,
    HeaderSharedComponent,
    SidenavComponent, 
    HomeComponent, 
    FooterComponent, 
    WelcomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    HttpClientModule,
    // ReactiveFormsModule,
    RouterModule.forRoot([
      { 
        path: 'listExpert', 
        loadComponent: () => import('./components/list-expert/list-expert.component')
        .then(m => m.ListExpertComponent) 
      }
    ]
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
