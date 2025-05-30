import { Controller, Get, Post, Body, Query, BadRequestException, HttpException, InternalServerErrorException } from '@nestjs/common';
import { CityService } from './city.service';
import { City } from './entities/city.entity';
import { CreateCityDto } from './dto/create-city.dto';

@Controller('city')
export class CityController {

  constructor(private readonly cityService: CityService) {}

  @Get()
  findAll(): Promise<City[]> {
    return this.cityService.findAll();
  }

  @Get('search')
  async findByName(@Query('name') name: string): Promise<City[]> {
    try {
      if (!name || name.trim().length === 0) {
        throw new BadRequestException('O parâmetro name é obrigatório');
      }
      return await this.cityService.findByName(name);
    } catch (error) {
      console.error('Erro ao buscar cidades:', error);
      throw error instanceof HttpException
        ? error
        : new InternalServerErrorException('Erro interno ao buscar cidades');
    }
  }

  @Post()
  create(@Body() createCityDto: CreateCityDto): Promise<City> {
    return this.cityService.create(createCityDto);
  }
}
