import { CommonModule } from '@angular/common';
import { Component, OnInit, Output } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { ExpertService } from '../../services/expert.service';
import { Expert } from '../../models/Expert';


@Component({
  selector: 'app-list-expert',
  standalone: true,
  imports: [CommonModule,RouterLink],
  templateUrl: './list-expert.component.html',
  styleUrl: './list-expert.component.css'
})
export class ListExpertComponent implements OnInit{
  experts?:Expert[];
  // @Output() expertsUpdated= new EventEmitter<Expert[]>();
  constructor(private expertService:ExpertService,private router:Router){}
  ngOnInit():void{
    this.getExperts();
  }
  private getExperts(){
    this.expertService.getExpertList().subscribe(data=>
      this.experts=data
    )
  }
  deleteExpert(expert: Expert) {
    this.expertService.deleteExpert(expert).subscribe(() => {
      this.getExperts(); 
    });
  }
}
