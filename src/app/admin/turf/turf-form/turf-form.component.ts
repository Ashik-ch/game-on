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
import { turfTypesEnum } from '../helper';
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
  turfTypes = Object.values(turfTypesEnum).map(value => ({ name: value, value }));
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
      mobileNumber: [''],
      openingTime: [''],
      closingTime: [''],
      turfTypes: [''],
      email: ['', Validators.email],
      password: ['']
    });
  }

  onSubmit() {
    this.turfForm.markAllAsTouched();
    if (this.turfForm.valid) {
      const formPayload = { ...turfFormApiJson }
      formPayload.turf_name = this.turfForm.get('turfName')?.value;
      formPayload.turf_address = this.turfForm.get('turfAddress')?.value;
      formPayload.mobile_number = this.turfForm.get('mobileNumber')?.value;
      formPayload.opening_time = this.turfForm.get('openingTime')?.value;
      formPayload.closing_time = this.turfForm.get('closingTime')?.value;
      formPayload.turf_types = this.turfForm.get('turfTypes')?.value.map((t: any) => t.value);
      formPayload.turf_email = this.turfForm.get('email')?.value;
      formPayload.turf_password = this.turfForm.get('password')?.value;
      this.communicatorService.apiRunner(formPayload)
        .subscribe((apiReturn) => {
          if (apiReturn) {
            this.router.navigateByUrl('admin/turf');
          }
        })
    }
  }
}
