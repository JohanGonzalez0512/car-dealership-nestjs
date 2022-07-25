import { Car } from "src/cars/interfaces/car.interface";
import { v4 as uuid } from 'uuid';

export const CARS_SEED: Car[] = [
    {
        id: uuid(),
        brand: 'BMW',
        model: 'Mustang',
    },
    {
        id: uuid(),
        brand: 'Honda',
        model: 'CIVIC',
    },
    {
        id: uuid(),
        brand: 'Jeep',
        model: 'Cherokee',
    },

]