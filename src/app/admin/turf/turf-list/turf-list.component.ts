import { Component } from '@angular/core';
import { CommunicatorService } from '../../../service/communicator/communicator.service';
import { turfListApiJson } from '../api';
import { TurfListType } from '../helper';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-turf-list',
  templateUrl: './turf-list.component.html',
  styleUrl: './turf-list.component.scss',
  standalone: true,
  imports: [RouterModule],
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
