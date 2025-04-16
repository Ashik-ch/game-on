import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommunicatorService } from '../../service';
import { turfDataByIdApiJson, turfFormApiJson } from '../api';
import { SelectModule } from 'primeng/select';
import { ButtonModule } from 'primeng/button';
import { FluidModule } from 'primeng/fluid';
import { InputTextModule } from 'primeng/inputtext';
import { TextareaModule } from 'primeng/textarea';
import { MultiSelectModule } from 'primeng/multiselect';
import { TurfListType, turfTypesEnum } from '../helper';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-turf-form',
  templateUrl: './turf-form.component.html',
  styleUrls: ['./turf-form.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    SelectModule,
    ButtonModule,
    FluidModule,
    InputTextModule,
    TextareaModule,
    MultiSelectModule,
  ],
})

export class TurfFormComponent implements OnInit {
  isLoading = false;
  turfData!: TurfListType;
  turfForm!: FormGroup;

  turfId?: string;
  turfTypes = Object.values(turfTypesEnum).map(value => ({ name: value, value }));

  constructor(
    private fb: FormBuilder,
    private communicatorService: CommunicatorService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.turfFormBuilder();
    this.route.params.subscribe(param => {
      this.turfId = param['id'];
      if (this.turfId) {
        this.getTurfById();
      }
    });
  }

  turfFormBuilder() {
    this.turfForm = this.fb.group({
      turfName: ['', Validators.required],
      turfAddress: ['', Validators.required],
      mobileNumber: ['', Validators.required],
      openingTime: ['', Validators.required],
      closingTime: ['', Validators.required],
      turfTypes: [[], Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: [''],
    });
  }

  get f() {
    return this.turfForm.controls;
  }

  onSubmit() {
    this.turfForm.markAllAsTouched();
    if (this.turfForm.valid) {
      const formPayload = { ...turfFormApiJson };
      formPayload.turf_name = this.f['turfName'].value;
      formPayload.turf_address = this.f['turfAddress'].value;
      formPayload.mobile_number = this.f['mobileNumber'].value;
      formPayload.opening_time = this.f['openingTime'].value;
      formPayload.closing_time = this.f['closingTime'].value;
      formPayload.turf_types = this.f['turfTypes'].value.map((t: any) => t.value);
      formPayload.turf_email = this.f['email'].value;
      formPayload.turf_password = this.f['password'].value;
      this.communicatorService.apiRunner(formPayload).subscribe(apiReturn => {
        if (apiReturn) {
          this.router.navigateByUrl('admin/turf');
        }
      });
    }
  }

  getTurfById() {
    this.isLoading = true;
    const turfDataByIdPayload = { ...turfDataByIdApiJson };
    turfDataByIdPayload.pathParameters = this.turfId;
    this.communicatorService.apiRunner(turfDataByIdPayload).subscribe(apiReturn => {
      if (apiReturn) {
        this.isLoading = false;
        this.turfData = apiReturn;
        this.setFormValues(this.turfData);
      }
    });
  }

  setFormValues(data: TurfListType) {
    this.turfForm.patchValue({
      turfName: data.turf_name,
      turfAddress: data.turf_address,
      mobileNumber: data.mobile_number,
      openingTime: data.opening_time,
      closingTime: data.closing_time,
      turfTypes: data.turf_types,
      email: data.turf_email,
    });
  }
}
