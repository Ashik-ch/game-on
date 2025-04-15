import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommunicatorService } from '../../service';
import { turfFormApiJson } from '../api';
import { SelectModule } from 'primeng/select';
import { ButtonModule } from 'primeng/button';
import { FluidModule } from 'primeng/fluid';
import { InputTextModule } from 'primeng/inputtext';
import { TextareaModule } from 'primeng/textarea';
import { MultiSelectModule } from 'primeng/multiselect';
import { gamesData, turfTypesEnum } from '../helper';
import { Router } from '@angular/router';

@Component({
  selector: 'app-turf-form',
  templateUrl: './turf-form.component.html',
  styleUrl: './turf-form.component.scss',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    SelectModule, ButtonModule, FluidModule, InputTextModule, TextareaModule, MultiSelectModule,],
})

export class TurfFormComponent {
  turfForm!: FormGroup;
  gamesData = gamesData;
  selectedGames = [];
  turfTypes = Object.entries(turfTypesEnum).map(([key, value]) => ({ name: value, value: key }));
  selectedTurfTypes = [];

  constructor(private fb: FormBuilder,
    private communicatorService: CommunicatorService,
    private router: Router,
  ) { }

  ngOnInit() {
    this.turfFormBuilder();
  }

  turfFormBuilder() {
    this.turfForm = this.fb.group({
      turfName: [''],
      turfAddress: [''],
      turfGames: [],
      mobileNumber: [''],
      openingTime: [''],
      closingTime: [''],
      games: [''],
      turfTypes: [''],
      email: ['', Validators.email],
      password: ['']
    });
  }

  onSubmit() {
    if (this.turfForm.valid) {
      console.log(this.turfForm.value);
      const formPayload = { ...turfFormApiJson }
      formPayload.turf_name = this.turfForm.get('turfName')?.value;
      formPayload.turf_address = this.turfForm.get('turfAddress')?.value;
      formPayload.turf_games = this.turfForm.get('turfGames')?.value;
      formPayload.mobile_number = this.turfForm.get('mobileNumber')?.value;
      formPayload.opening_time = this.turfForm.get('openingTime')?.value;
      formPayload.closing_time = this.turfForm.get('closingTime')?.value;
      formPayload.turf_games = this.turfForm.get('games')?.value;
      formPayload.turf_types = this.turfForm.get('turfTypes')?.value;
      formPayload.email = this.turfForm.get('email')?.value;
      formPayload.password = this.turfForm.get('password')?.value;
      console.log("formPayload", formPayload);
      this.communicatorService.apiRunner(formPayload)
        .subscribe((apiReturn) => {
          if (apiReturn) {
            this.router.navigateByUrl('turf');
          }
        })
    }
    else {
      this.turfForm.markAllAsTouched();
    }
  }


}
