import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { InputTextModule } from 'primeng/inputtext';
import { TableModule } from 'primeng/table';
import { DialogModule } from 'primeng/dialog';
import { GamesFormComponent } from '../games-form/games-form.component';

@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrl: './games.component.scss',
  standalone: true,
  imports: [
    CardModule,
    TableModule,
    IconFieldModule,
    InputIconModule,
    InputTextModule,
    ButtonModule,
    GamesFormComponent,
    DialogModule
  ],
})
export class GamesComponent {
  isLoading = false;
  gamesList: any
  gamesFormVisible = false;

  constructor() { }


  createGames() {
    this.gamesFormVisible = true;
  }
  editGames(id: string) { }

}
