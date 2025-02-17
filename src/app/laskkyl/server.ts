'use server';

import { LaskkylData } from './types';

export async function getLaskkylData() {
    return laskkylData;
}

const laskkylData: LaskkylData = {
    products: {
        drinks: [
            {
                name: 'Läsk',
                price: 8,
            },
            {
                name: 'Bubbelvatten',
                price: 8,
            },
            {
                name: 'Kong Strong',
                price: 8,
            },
            {
                name: 'Hell!!',
                price: 4,
            },
        ],
        snacks: [
            {
                name: 'Risifrutti',
                price: 13,
            },
            {
                name: 'Pingvinstång',
                price: 5,
            },
            {
                name: 'Chokladbar',
                price: 2,
            },
        ],
        other: [],
    },
};
