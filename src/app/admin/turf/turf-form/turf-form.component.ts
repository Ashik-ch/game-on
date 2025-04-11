import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Form, FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { turfFormApiJson } from '../api';
import { CommunicatorService } from '../../../service/communicator/communicator.service';

@Component({
  selector: 'app-turf-form',
  templateUrl: './turf-form.component.html',
  styleUrl: './turf-form.component.scss',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
  ],
})
export class TurfFormComponent {
  turfForm!: FormGroup;

  constructor(private fb: FormBuilder,
    private communicatorService: CommunicatorService,
  ) { }

  ngOnInit() {
    this.turfFormBuilder();
  }

  turfFormBuilder() {
    this.turfForm = this.fb.group({
      turfName: [''],
      turfLocation: [''],
      turfGames: [],
      mobileNumber: [''],
      openingTime: [''],
      closingTime: [''],
      email: ['', Validators.email],
      password: ['']
    });

  }


  onSubmit() {
    if (this.turfForm.valid) {
      console.log(this.turfForm.value);
      const formPayload = { ...turfFormApiJson }
      formPayload.turf_name = this.turfForm.get('turfName')?.value;
      formPayload.turf_location = this.turfForm.get('turfLocation')?.value;
      formPayload.turf_games = this.turfForm.get('turfGames')?.value;
      formPayload.mobile_number = this.turfForm.get('mobileNumber')?.value;
      formPayload.opening_time = this.turfForm.get('openingTime')?.value;
      formPayload.closing_time = this.turfForm.get('closingTime')?.value;
      formPayload.email = this.turfForm.get('email')?.value;
      formPayload.password = this.turfForm.get('password')?.value;
      this.communicatorService.apiRunner(formPayload).subscribe((res) => {
        if (res) {
          console.log(res);
        }
      })
    }
    else {
      this.turfForm.markAllAsTouched();
    }
  }


}
