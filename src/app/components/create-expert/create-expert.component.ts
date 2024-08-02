import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { Expert } from '../../models/Expert';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ExpertService } from '../../services/expert.service';

@Component({
  selector: 'app-create-expert',
  standalone: true,
  imports: [CommonModule,RouterLink,ReactiveFormsModule],
  templateUrl: './create-expert.component.html',
  styleUrl: './create-expert.component.css'
})
export class CreateExpertComponent {
  expert: Expert = new Expert();
  constructor(private expertService:ExpertService,private router:Router){}
  ngOnInit():void{}
  createExpert(expert:Expert){
    this.expertService.createExpert(expert).subscribe(() => {
      this.router.navigate(['/list-experts']); 
    });
  }


}
