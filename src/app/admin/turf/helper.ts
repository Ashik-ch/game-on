export enum turfTypesEnum {
    Indoor = 'Indoor',
    Outdoor = 'Outdoor'
}

export const gamesData = [
    {
        label: 'Indoor',
        value: 'indoor',
        items: [
            { label: 'Badminton', value: 'Badminton' },
            { label: 'Table Tennis', value: 'Table Tennis' },
            { label: 'Squash', value: 'Squash' },
            { label: 'Bowling', value: 'Bowling' }
        ]
    },
    {
        label: 'Outdoor',
        value: 'outdoor',
        items: [
            { label: 'Football', value: 'Football' },
            { label: 'Cricket', value: 'Cricket' },
            { label: 'Tennis', value: 'Tennis' },
            { label: 'Baseball', value: 'Baseball' }
        ]
    }
];

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
