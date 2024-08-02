// import { CommonModule } from '@angular/common';
// import { Component, OnInit } from '@angular/core';
// import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
// import { Router } from '@angular/router';
// import { delay, tap } from 'rxjs';

// @Component({
//   selector: 'app-login',
//   standalone: true,
//   imports: [CommonModule,ReactiveFormsModule],
//   templateUrl: './login.component.html',
//   styleUrl: './login.component.css'
// })
// export class LoginComponent implements OnInit{
//   showToast = false;
//   toastMessage = '';
//   toastType: 'success' | 'error' = 'success';
//   form:  FormGroup = new FormGroup({
//     email: new FormControl('', [Validators.email, Validators.required]),
//     password: new FormControl('', [Validators.minLength(6), Validators.required]),
//   });
//   constructor(private router:Router){

//   }
//   ngOnInit(): void {
//     this.email.valueChanges.pipe(
//       delay(2300),
//       tap(console.log)
//     ).subscribe();
//     this.password.valueChanges.pipe(
//       tap(console.log)
//     ).subscribe();
//   }
//   get email() {
//     return this.form?.get('email') as FormControl;
//   }

//   get password() {
//     return this.form?.get('password') as FormControl;
//   }
//   onSubmit() {
//     if (this.form.valid) {
      
//       this.showSuccessToast('Connexion reussie.');
//       this.router.navigateByUrl('/list');
//     }
//     else{
//       this.showErrorToast('Veuillez remplir tous les champs obligatoires.');
//     }
//   }

// showSuccessToast(message: string) {
//     this.toastMessage = message;
//     this.toastType = 'success';
//     this.showToast = true;
//     setTimeout(() => this.showToast = false, 3000);
//   }

//   showErrorToast(message: string) {
//     this.toastMessage = message;
//     this.toastType = 'error';
//     this.showToast = true;
//     setTimeout(() => this.showToast = false, 3000);
//   }

    
//   navigateToRegister(){
//     this.router.navigateByUrl("/register")
//   }

// }
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
    standalone: true,
    imports: [CommonModule,ReactiveFormsModule],
    templateUrl: './login.component.html',
    styleUrl: './login.component.css'
})
export class LoginComponent {
  showToast = false;
  toastMessage = '';
  toastType: 'success' | 'error' = 'success';
  form: FormGroup;

  constructor(private fb: FormBuilder, private router: Router) {
    this.form = this.fb.group({
      email: ['', [Validators.email, Validators.required]],
      password: ['', [Validators.minLength(6), Validators.required]]
    });
  }

  onSubmit() {
    if (this.form.valid) {
      this.showSuccessToast('Connexion réussie.');
      this.router.navigateByUrl('/welcome');
    } else {
      this.showErrorToast('Veuillez remplir tous les champs obligatoires.');
    }
  }

  showSuccessToast(message: string) {
    this.toastMessage = message;
    this.toastType = 'success';
    this.showToast = true;
    setTimeout(() => (this.showToast = false), 3000);
  }

  showErrorToast(message: string) {
    this.toastMessage = message;
    this.toastType = 'error';
    this.showToast = true;
    setTimeout(() => (this.showToast = false), 3000);
  }


}
