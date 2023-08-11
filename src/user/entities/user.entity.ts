import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('user')
export class UsersEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: true })
  name: string;

  @Column({ nullable: true })
  family: string;

  @Column()
  age: string;

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

}
