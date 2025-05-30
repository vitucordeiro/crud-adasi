import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Person } from '../../person/entities/person.entity';

@Entity()
export class City {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column({ length: 2 })
  uf: string;

  @OneToMany(() => Person, person => person.city)
  persons: Person[];
}
