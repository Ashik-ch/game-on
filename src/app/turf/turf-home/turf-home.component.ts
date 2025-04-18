import { Component } from '@angular/core';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { CommunicatorService } from '../../service/communicator/communicator.service';
import { getByIdTurfDataApiJson } from './api';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-turf-home',
  templateUrl: './turf-home.component.html',
  styleUrl: './turf-home.component.scss',
  standalone: true,
  imports: [
    CommonModule,
    ButtonModule,
    CardModule,
  ],
})
export class TurfHomeComponent {
  turfData: any

  constructor(
    private readonly communicatorService: CommunicatorService
  ) { }

  ngOnInit() {
    this.getTurfDetails();
  }

  getTurfDetails() {
    const turfDetailsPayload = { ...getByIdTurfDataApiJson }
    this.communicatorService.apiRunner(turfDetailsPayload).subscribe(apiReturn => {
      this.turfData = apiReturn;
      console.log("apiReturn", apiReturn);

    })
  }
}
