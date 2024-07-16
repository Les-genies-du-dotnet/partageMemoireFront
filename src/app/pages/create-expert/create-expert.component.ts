import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-expert',
  standalone: true,
  imports: [],
  templateUrl: './create-expert.component.html',
  styleUrl: './create-expert.component.css'
})
export class CreateExpertComponent {
  constructor(private router:Router){

  }
  navigateToListExpert(){
    this.router.navigateByUrl("/list")
  }

}
