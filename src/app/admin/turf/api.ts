import { BaserRestApiJson } from "../service";

export class TurfFormRestApiJson extends BaserRestApiJson {
  turf_name!: string;
  turf_address!: string;
  turf_types!: string[];
  mobile_number!: string;
  opening_time!: string;
  closing_time!: string;
  turf_email!: string;
  turf_password!: string;
}

export const getTurfListApiJson: BaserRestApiJson = {
  url: 'turf',
  method: 'get',
};

export const getByIdTurfDataApiJson: BaserRestApiJson = {
  url: 'turf',
  method: 'get',
  pathParameters: ''
};

export const postTurfCreateFormApiJson: TurfFormRestApiJson = {
  url: 'turf',
  method: 'post',
  turf_name: '',
  turf_address: '',
  turf_types: [],
  mobile_number: '',
  opening_time: '',
  closing_time: '',
  turf_email: '',
  turf_password: '',
};

export const patchTurfUpdateFormApiJson: TurfFormRestApiJson = {
  url: 'turf',
  method: 'patch',
  turf_name: '',
  turf_address: '',
  turf_types: [],
  mobile_number: '',
  opening_time: '',
  closing_time: '',
  turf_email: '',
  turf_password: '',
};


export const deleteTurfDataApiJson: BaserRestApiJson = {
  url: 'turf',
  method: 'delete',
  pathParameters: ''
};