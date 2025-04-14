import { BaserRestApiJson } from '../../service';

export class TurfFormRestApiJson extends BaserRestApiJson {
  turf_name!: string;
  turf_location!: string;
  turf_games!: string[];
  mobile_number!: string;
  opening_time!: string;
  closing_time!: string;
  email!: string;
  password!: string;
}

export const turfFormApiJson: TurfFormRestApiJson = {
  url: 'turf',
  method: 'post',
  turf_name: '',
  turf_location: '',
  turf_games: [],
  mobile_number: '',
  opening_time: '',
  closing_time: '',
  email: '',
  password: '',
};

export const turfListApiJson: BaserRestApiJson = {
  url: 'turf',
  method: 'get',
};
