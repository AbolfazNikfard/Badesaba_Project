 import { IsString } from 'class-validator';
import { IsNumber } from 'class-validator';
import { IsDate } from 'class-validator';
import { IsBoolean } from 'class-validator';
import { IsOptional } from 'class-validator';
import { ProductEntity } from '../../product/entities/product.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('Catagories')
export class CatagoryEntity {
  constructor(input: Partial<CatagoryEntity>) {
    Object.assign(this, input);
  }
  @PrimaryGeneratedColumn()
  @IsNumber()
  Id: number;

  @Column()
  @IsString()
  name: string;

  @Column()
  @IsString()
  icon: string;

  @Column()
  @IsNumber()
  order: number;

  @Column({ nullable: true })
  @IsNumber()
  @IsOptional()
  parrentId: number;

  @Column({ default: true })
  @IsBoolean()
  @IsOptional()
  active: boolean;

  @CreateDateColumn()
  @IsDate()
  createdAt: Date;

  @Column()
  @IsDate()
  updatedAt: Date;

  @Column()
  @IsDate()
  deletedAt: Date;

  @OneToMany(() => ProductEntity, (products) => products.category)
  Products: ProductEntity[];
}
