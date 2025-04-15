import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TableModule } from 'primeng/table';
import { CommunicatorService } from '../../service';
import { turfListApiJson } from '../api';
import { TurfListType } from '../helper';

@Component({
  selector: 'app-turf-list',
  templateUrl: './turf-list.component.html',
  styleUrl: './turf-list.component.scss',
  standalone: true,
  imports: [RouterModule,
    TableModule
  ],
})
export class TurfListComponent {
  turfList: TurfListType[] = [];
  constructor(private communicatorService: CommunicatorService) { }

  ngOnInit() {
    this.getTurfList();
  }

  getTurfList() {
    const turfListApiPayload = { ...turfListApiJson }
    this.communicatorService.apiRunner(turfListApiPayload).subscribe((apiReturn) => {
      if (apiReturn) {
        this.turfList = apiReturn
      }
    });
  }
}
