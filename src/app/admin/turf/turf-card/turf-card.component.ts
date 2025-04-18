import { Component } from '@angular/core';
import { TurfListType } from '../helper';
import { getTurfListApiJson } from '../api';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SelectButtonModule } from 'primeng/selectbutton';
import { ButtonModule } from 'primeng/button';
import { TurfListComponent } from '../turf-list';
import { CommunicatorService } from '../../../service';

@Component({
  selector: 'app-turf-card',
  templateUrl: './turf-card.component.html',
  styleUrl: './turf-card.component.scss',
  standalone: true,
  imports: [CommonModule,
    FormsModule,
    SelectButtonModule,
    ButtonModule, TurfListComponent],
})
export class TurfCardComponent {
  isLoading = false;
  turfList: TurfListType[] = [];
  layout: 'list' | 'grid' = 'grid';
  options = ['list', 'grid'];
  constructor(private communicatorService: CommunicatorService) { }

  ngOnInit() {
    this.getTurfList();
  }

  getTurfList() {
    this.isLoading = true;
    const turfListApiPayload = { ...getTurfListApiJson }
    this.communicatorService.apiRunner(turfListApiPayload).subscribe((apiReturn) => {
      if (apiReturn) {
        this.turfList = apiReturn
        this.isLoading = false;
      }
    });
    this.isLoading = false;
  }

  navigateToTurf(id: string, name: string) {

  }


}
