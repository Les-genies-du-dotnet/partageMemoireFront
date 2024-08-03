// import { CommonModule } from '@angular/common';
// import { Component, Input, OnInit } from '@angular/core';
// import { Router, RouterLink } from '@angular/router';
// import { Expert } from '../../models/Expert';
// import { FormsModule } from '@angular/forms';

// @Component({
//   selector: 'app-edit-expert',
//   standalone: true,
//   imports: [CommonModule,RouterLink,FormsModule],
//   templateUrl:'./edit-expert.component.html',
//   styleUrl: './edit-expert.component.css'
// })
// export class EditExpertComponent implements OnInit{
 
//   @Input() expert?:Expert;
//   constructor(){}
//   ngOnInit():void{

//   }
// }
import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { ExpertService } from '../../services/expert.service';
import { Expert } from '../../models/Expert';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-edit-expert',
  standalone: true,
  imports: [CommonModule, RouterLink, FormsModule],
  templateUrl: './edit-expert.component.html',
  styleUrls: ['./edit-expert.component.css']
})
export class EditExpertComponent implements OnInit {
  expert: Expert = new Expert();

  constructor(
    private expertService: ExpertService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id')!;
    this.expertService.getExpertById(id).subscribe(
      (data) => {
        this.expert = data;
      },
      (error) => {
        console.error('Error fetching expert:', error);
      }
    );
  }

  onSave() {
    if (this.expert) {
      this.expertService.updateExpert(this.expert).subscribe(
        () => {
          console.log('Expert updated successfully');
          this.router.navigate(['/listExpert']);
        },
        (error) => {
          console.error('Error updating expert:', error);
        }
      );
    }
  }
}


