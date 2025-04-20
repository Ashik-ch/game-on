import { BaserRestApiJson } from "../../service";


export class GameFormRestApiJson extends BaserRestApiJson {
  game_name!: string;
  turf_type!: string;
}

export const getGameListApiJson: BaserRestApiJson = {
  url: 'games',
  method: 'get',
};

export const getByIdGameDataApiJson: BaserRestApiJson = {
  url: 'games',
  method: 'get',
  pathParameters: ''
};

export const postGameCreateFormApiJson: GameFormRestApiJson = {
  url: 'games',
  method: 'post',
  game_name: '',
  turf_type: '',
};

export const patchGameUpdateFormApiJson: GameFormRestApiJson = {
  url: 'games',
  method: 'patch',
  game_name: '',
  turf_type: '',
};


export const deleteGameDataApiJson: BaserRestApiJson = {
  url: 'games',
  method: 'delete',
  pathParameters: ''
};