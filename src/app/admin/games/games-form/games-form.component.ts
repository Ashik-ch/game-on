import { Component, EventEmitter, Output, viewChild } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { FluidModule } from 'primeng/fluid';
import { CommonModule } from '@angular/common';
import { CommunicatorService } from 'src/app/service';
import { patchGameUpdateFormApiJson, postGameCreateFormApiJson } from '../api';
import { turfTypesEnum } from '../../turf';
import { SelectModule } from 'primeng/select';

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
    SelectModule,
    ReactiveFormsModule,
    FormsModule,
  ],
})
export class GamesFormComponent {
  @Output() formSubmitted: EventEmitter<boolean> = new EventEmitter<boolean>();
  gamesData: any;
  gamesForm!: FormGroup;
  gameId?: string
  turfTypes = Object.values(turfTypesEnum).map(value => ({ name: value, value }));


  constructor(
    private fb: FormBuilder,
    private readonly communicatorService: CommunicatorService
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

  get f() {
    return this.gamesForm.controls;
  }

  onSubmit() {
    if (this.gamesForm.valid) {
      const formPayload = this.gameId ? { ...patchGameUpdateFormApiJson } : { ...postGameCreateFormApiJson };
      formPayload.game_name = this.f['gameName'].value;
      formPayload.turf_type = this.f['turfType'].value;
      if (this.gameId) {
        formPayload.pathParameters = this.gameId;
      }
      this.communicatorService.apiRunner(formPayload).subscribe(apiReturn => {
        if (apiReturn) {
          this.formSubmitted.emit(true);
        }
      });
    }
  }
}
