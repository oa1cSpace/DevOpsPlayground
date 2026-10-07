import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('meals')
export class Meal {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  date: Date;

  @Column()
  meal: string;

  @Column()
  amount: number;

  @Column()
  measure: string;

  @Column()
  hunger: number;
}
