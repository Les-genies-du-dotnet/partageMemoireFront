import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-expert',
  templateUrl:'./edit-expert.component.html',
  styleUrl: './edit-expert.component.css'
})
export class EditExpertComponent {
  constructor(private router:Router){
    
  }
  navigateToListExpert(){
    this.router.navigateByUrl("/create")
  }
}
