import { BaserRestApiJson } from "../../service";


export class GameFormRestApiJson extends BaserRestApiJson {
  game_name!: string;
  turf_type!: string;
}

export const getGameListApiJson: BaserRestApiJson = {
  url: 'game',
  method: 'get',
};

export const getByIdGameDataApiJson: BaserRestApiJson = {
  url: 'game',
  method: 'get',
  pathParameters: ''
};

export const postGameCreateFormApiJson: GameFormRestApiJson = {
  url: 'game',
  method: 'post',
  game_name: '',
  turf_type: '',
};

export const patchGameUpdateFormApiJson: GameFormRestApiJson = {
  url: 'game',
  method: 'patch',
  game_name: '',
  turf_type: '',
};


export const deleteGameDataApiJson: BaserRestApiJson = {
  url: 'game',
  method: 'delete',
  pathParameters: ''
};