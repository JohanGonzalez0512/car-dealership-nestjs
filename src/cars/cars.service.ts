import { Injectable, NotFoundException } from '@nestjs/common';
import { v4 as uuid } from 'uuid';

import { Car } from './interfaces/car.interface';
import { CreateCarDto, UpdateCarDto } from './dto';

@Injectable()
export class CarsService {

    private cars: Car[] = [
        // {
        //     id: uuid(),
        //     brand: 'Ford',
        //     model: 'Mustang',
        // },
       
    ];

    findAll() {
        return this.cars;
    }

    findOneById(id: string) {
        const car = this.cars.find(car => car.id === id);

        if (!car) throw new NotFoundException('Car with id ' + id + ' does not exist');

        return car
    }

    create(createCarDto: CreateCarDto) {

        const car: Car = {
            id: uuid(),
            ...createCarDto,
        };

        this.cars.push(car);

        return car;
    }

    update(id: string, updateCarDto: UpdateCarDto) {
        const carDB = this.findOneById(id);
        this.cars = this.cars.map(car => car.id === id ? { ...carDB, ...updateCarDto, id } : car);
        return carDB;
    }

    delete(id: string) {
        const carDB = this.findOneById(id);
        if (!carDB) throw new NotFoundException('Car with id ' + id + ' does not exist');
        this.cars = this.cars.filter(car => car.id !== id);
        return carDB;
    }

    fillCarsWithSeedData( cars: Car[] ) {
        this.cars = cars;
    }











}
