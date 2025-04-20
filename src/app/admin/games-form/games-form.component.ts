import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { MultiSelectModule } from 'primeng/multiselect';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { FluidModule } from 'primeng/fluid';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-games-form',
  templateUrl: './games-form.component.html',
  styleUrl: './games-form.component.scss',
  standalone: true,
  imports: [
    CommonModule,
    InputTextModule,
    ButtonModule,
    FluidModule,
    MultiSelectModule,
    ReactiveFormsModule,
    FormsModule,
  ],
})
export class GamesFormComponent {
  gamesData: any
  gamesForm!: FormGroup;
  gameId?: string


  constructor(
    private fb: FormBuilder,
  ) { }

  ngOnInit() {
    this.gameFormBuilder()
  }

  gameFormBuilder() {
    this.gamesForm = this.fb.group({
      gameName: ['', Validators.required],
      turfType: [[], Validators.required],
    })

  }

  onSubmit() {

  }
}
