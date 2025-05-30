import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { City } from '../../city/entities/city.entity';

@Entity()
export class Person {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column({ nullable: true })
  street: string;

  @Column({ nullable: true })
  neighborhood: string;

  @Column()
  cityId: number;

  @ManyToOne(() => City, city => city.persons, { eager: true })
  @JoinColumn({ name: 'cityId' })
  city: City;
}
