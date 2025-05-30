import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Person } from './entities/person.entity';
import { CreatePersonDto } from './dto/create-person.dto';
import { UpdatePersonDto } from './dto/updated-person.dto';

@Injectable()
export class PersonService {
  // like a spring
  constructor(
    @InjectRepository(Person)
    private personRepository: Repository<Person>,
  ) {}

  findAll(): Promise<Person[]> {
    return this.personRepository.find();
  }

  async findOne(id: number): Promise<Person> {
    const person = await this.personRepository.findOne({ where: { id } });
    if (!person) throw new NotFoundException('Pessoa não encontrada');
    return person;
  }

  create(dto: CreatePersonDto): Promise<Person> {
    const person = this.personRepository.create(dto);
    return this.personRepository.save(person);
  }

  async update(id: number, dto: UpdatePersonDto): Promise<Person> {
    const person = await this.findOne(id);
    const updated = this.personRepository.merge(person, dto);
    return this.personRepository.save(updated);
  }

  async remove(id: number): Promise<void> {
    const person = await this.findOne(id);
    await this.personRepository.remove(person);
  }
}
