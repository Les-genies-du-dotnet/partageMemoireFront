import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { Expert } from '../../models/Expert';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-edit-expert',
  standalone: true,
  imports: [CommonModule,RouterLink,FormsModule],
  templateUrl:'./edit-expert.component.html',
  styleUrl: './edit-expert.component.css'
})
export class EditExpertComponent implements OnInit{
 
  @Input() expert?:Expert;
  constructor(){}
  ngOnInit():void{

  }
}
