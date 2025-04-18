export enum turfTypesEnum {
    Indoor = 'Indoor',
    Outdoor = 'Outdoor'
}

export interface TurfListType {
    id: string;
    turf_name: string;
    mobile_number: string;
    opening_time: string;
    closing_time: string;
    turf_address: string;
    turf_types: string;
    turf_email: string;
    turf_password: string;
    createdAt: string;
    updatedAt: string;
}
