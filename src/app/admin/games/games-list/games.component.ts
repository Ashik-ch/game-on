import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { InputTextModule } from 'primeng/inputtext';
import { TableModule } from 'primeng/table';
import { DialogModule } from 'primeng/dialog';
import { GamesFormComponent } from '../games-form/games-form.component';
import { getGameListApiJson } from '../api';
import { CommunicatorService } from 'src/app/service';
import { GameListType } from '../helper';

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
  gamesList!: GameListType[]
  gamesFormVisible = false;

  constructor(private communicatorService: CommunicatorService) { }


  ngOnInit() {
    this.getGamesList();
  }

  getGamesList() {
    this.isLoading = true;
    const getGameListApiPayload = { ...getGameListApiJson }
    this.communicatorService.apiRunner(getGameListApiPayload).subscribe((apiReturn) => {
      if (apiReturn) {
        this.gamesList = apiReturn
        this.isLoading = false;
      }
    });
    this.isLoading = false;
  }


  createGames() {
    this.gamesFormVisible = true;
  }
  editGames(id: string) { }


  onFormSubmitted() {
    this.gamesFormVisible = false;

  }
}
