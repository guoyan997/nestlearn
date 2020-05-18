import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Country } from './country.entity';
import { Repository } from 'typeorm';

@Injectable()
export class CountryService {
  constructor(
    @InjectRepository(Country)
    private readonly countryRepository: Repository<Country>,
  ) { }

  find() {
    return this.countryRepository.find();
  }

  getCountry(id: string): Promise<Country[]> {
    return this.countryRepository.find({ id });
  }
}
