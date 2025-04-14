import { Component } from '@angular/core';
import { CommunicatorService } from '../../../service/communicator/communicator.service';
import { turfListApiJson } from '../api';
import { TurfListType } from '../helper';

@Component({
  selector: 'app-turf-list',
  standalone: true,
  imports: [],
  templateUrl: './turf-list.component.html',
  styleUrl: './turf-list.component.scss',
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
