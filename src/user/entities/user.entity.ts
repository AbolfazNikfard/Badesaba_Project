import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
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

}
