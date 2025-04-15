export enum turfTypesEnum {
    INDOOR = 'Indoor',
    OUTDOOR = 'Outdoor'
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
    id: number;
    name: string;
    mobile: string;
    opening_time: string;
    closing_time: string;
    location: string;
    turf_type: string;
    turf_price: number;
    email: string;
    password: string;
    createdAt: string;
    updatedAt: string;
}
