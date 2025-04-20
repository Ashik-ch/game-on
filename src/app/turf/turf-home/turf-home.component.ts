import { Component } from '@angular/core';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { CommunicatorService } from '../../service/communicator/communicator.service';
import { getByIdTurfDataApiJson } from './api';
import { CommonModule } from '@angular/common';
import { gamesData } from 'src/app/service/data';
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
  gamesData = gamesData;
  constructor(
    private readonly communicatorService: CommunicatorService
  ) { }

  ngOnInit() {
    this.getTurfDetails();
  }

  getTurfDetails() {
    const turfDetailsPayload = { ...getByIdTurfDataApiJson }
    turfDetailsPayload.pathParameters = '5178a309-565c-4dab-a241-7f73e339cc8e';
    this.communicatorService.apiRunner(turfDetailsPayload).subscribe(apiReturn => {
      this.turfData = apiReturn;
      console.log("apiReturn", apiReturn);

    })
  }
}
