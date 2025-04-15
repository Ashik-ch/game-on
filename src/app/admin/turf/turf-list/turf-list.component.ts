import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Table, TableModule } from 'primeng/table';
import { CommunicatorService } from '../../service';
import { turfListApiJson } from '../api';
import { TurfListType } from '../helper';
import { CommonModule } from '@angular/common';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { SelectModule } from 'primeng/select';
import { FormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-turf-list',
  templateUrl: './turf-list.component.html',
  styleUrl: './turf-list.component.scss',
  standalone: true,
  imports: [CommonModule,
    RouterModule,
    TableModule,
    IconFieldModule,
    InputIconModule,
    SelectModule,
    FormsModule,
    InputTextModule,
    ButtonModule
  ],
})
export class TurfListComponent {
  isLoading = false;
  turfList: TurfListType[] = [];
  constructor(private communicatorService: CommunicatorService) { }

  ngOnInit() {
    this.getTurfList();
  }

  getTurfList() {
    this.isLoading = true;
    const turfListApiPayload = { ...turfListApiJson }
    this.communicatorService.apiRunner(turfListApiPayload).subscribe((apiReturn) => {
      if (apiReturn) {
        this.turfList = apiReturn
        this.isLoading = false;
      }
    });
    this.isLoading = false;
  }

  onGlobalFilter(table: Table, event: Event) {
    table.filterGlobal((event.target as HTMLInputElement).value, 'contains');
  }
}
