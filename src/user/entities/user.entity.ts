import { CartEntity } from 'src/cart/entities/cart.entity';
import {
  Column,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('User')
export class UsersEntity {

  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: true })
  name: string;

  @Column({ nullable: true })
  email: string;    

  @Column({ nullable: true })
  password: string;

  @Column({ nullable: true })
  role: string;

  @Column({ nullable: true })
  family: string;

  @Column({ nullable: true })
  age: number;

  @Column({ nullable: true })
  cellphone: string;

  @Column({ nullable: true })
  birthdate: number;

  @Column()
  active: string;

  @Column()
  createdAt: Date;

  @Column()
  updatedAt: Date;

  @Column()
  deletedAt: Date;

  @OneToMany(()=>CartEntity,(carts)=>carts.user)
  carts:CartEntity[]
}
