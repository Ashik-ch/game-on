import { Component, Input } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { Table, TableModule } from 'primeng/table';
import { TurfListType } from '../helper';
import { CommonModule } from '@angular/common';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { SelectModule } from 'primeng/select';
import { FormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { CommunicatorService } from '../../service';
import { deleteTurfDataApiJson } from '../api';

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
  @Input() turfList: TurfListType[] = [];
  isLoading = false;
  constructor(
    private readonly communicatorService: CommunicatorService,
    private router: Router) { }

  ngOnInit() {
  }

  onGlobalFilter(table: Table, event: Event) {
    table.filterGlobal((event.target as HTMLInputElement).value, 'contains');
  }

  editTurf(id: string) {
    this.router.navigateByUrl("admin/turf/update/" + id)
  }


  deleteTurf(id: string) {
    const deleteTurfDataPayload = { ...deleteTurfDataApiJson }
    deleteTurfDataPayload.pathParameters = id;
    this.communicatorService.apiRunner(deleteTurfDataPayload).subscribe(apiReturn => {

    })
  }
}
