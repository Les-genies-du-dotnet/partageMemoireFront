import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { Expert } from '../../models/Expert';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { ExpertService } from '../../services/expert.service';

@Component({
  selector: 'app-create-expert',
  standalone: true,
  imports: [CommonModule,RouterLink,FormsModule],
  templateUrl: './create-expert.component.html',
  styleUrl: './create-expert.component.css'
})
export class CreateExpertComponent {
  // expert: Expert = new Expert();
  // expertForm: FormGroup;
  // constructor(private fb: FormBuilder,private expertService:ExpertService,private router:Router){
  //   this.expertForm = this.fb.group({
  //     prenom: ['', Validators.required],
  //     nom: ['', Validators.required],
  //     specialite: ['', Validators.required],
    
  //   });
  // }
  // onSubmit():void{
  //   if (this.expertForm.valid){
  //     const expert: Expert = this.expertForm.value;
  //     this.expertService.createExpert(expert).subscribe(() => {
  //       alert('Expert created successfully')
  //       this.router.navigate(['/list-experts']); 
  //     }, error => {
  //       alert('Error creating expert');
  //     }
  //   );

  //   }
    
  // }
  expert: Expert = new Expert();

  constructor(private expertService: ExpertService) {}

  onSubmit() {
    this.expertService.createExpert(this.expert).subscribe(
      (response) => {
        console.log('Expert created successfully', response);
        // Réinitialiser le formulaire ou rediriger l'utilisateur
        this.resetForm();
      },
      (error) => {
        console.error('Error creating expert', error);
        // Gérer les erreurs ici
      }
    );
  }

  resetForm() {
    this.expert = new Expert();
  }


}
