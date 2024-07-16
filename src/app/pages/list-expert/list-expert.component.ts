import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-expert',
  standalone: true,
  imports: [],
  templateUrl: './list-expert.component.html',
  styleUrl: './list-expert.component.css'
})
export class ListExpertComponent {
  constructor(private router:Router){
    
  }
  navigateToCreateExpert(){
    this.router.navigateByUrl("/create")
  }
  navigateToEditExpert(){
    this.router.navigateByUrl("/edit")
  }

}
