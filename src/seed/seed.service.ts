import { Injectable } from '@nestjs/common';

import { CarsService } from '../cars/cars.service';
import { BrandsService } from 'src/brands/brands.service';
import { BRANDS_SEED } from './data/brands.seed';
import { CARS_SEED } from './data/cars.seed';

@Injectable()
export class SeedService {

  constructor(
    private readonly CarsService: CarsService,
    private readonly BrandsService: BrandsService,
  ) { }


  populateDB() {
    this.BrandsService.fillBrandsWithSeedData(BRANDS_SEED);
    this.CarsService.fillCarsWithSeedData(CARS_SEED);

    return 'DB populated';
  }
}
