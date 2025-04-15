import { BaserRestApiJson } from "../service";

export class TurfFormRestApiJson extends BaserRestApiJson {
  turf_name!: string;
  turf_address!: string;
  turf_games!: string[];
  turf_types!: string[];
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
  turf_address: '',
  turf_games: [],
  turf_types: [],
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
