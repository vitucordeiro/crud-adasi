import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { City } from './entities/city.entity';
import { CreateCityDto } from './dto/create-city.dto';

@Injectable()
export class CityService {
  constructor(
    @InjectRepository(City)
    private cityRepository: Repository<City>,
  ) {}

  async findAll(): Promise<City[]> {
    try {
      return await this.cityRepository.find();
    } catch (error) {
      throw new InternalServerErrorException('Erro ao buscar todas as cidades');
    }
  }

  async findByName(name: string): Promise<City[]> {
    try {
      const normalizedName = name.trim().replace(/\s+/g, ' ');
      return await this.cityRepository
        .createQueryBuilder('city')
        .where('LOWER(city.name) LIKE LOWER(:name)', { name: `%${normalizedName}%` })
        .getMany();
    } catch (error) {
      throw new InternalServerErrorException('Erro ao buscar cidade por nome');
    }
  }

  async create(createCityDto: CreateCityDto): Promise<City> {
    try {
      const city = this.cityRepository.create(createCityDto);
      return await this.cityRepository.save(city);
    } catch (error) {
      throw new InternalServerErrorException('Erro ao criar cidade');
    }
  }
}
