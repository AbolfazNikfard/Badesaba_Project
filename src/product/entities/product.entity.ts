import {
  IsBoolean,
  IsDate,
  IsNumber,
  IsOptional,
  IsString,
} from 'class-validator';
import { CatagoryEntity } from '../../catagory/entities/catagory.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('products')
export class ProductEntity {
  @PrimaryGeneratedColumn()
  Id: number;

  @Column()
  @IsString()
  name: string;

  @Column()
  @IsString()
  enName: string;

  @Column({ nullable: true })
  @IsString()
  @IsOptional()
  description?: string;

  @Column()
  @IsString()
  image: string;

  @Column()
  @IsNumber()
  categoryId: number;

  @Column()
  @IsNumber()
  price: number;

  @Column()
  @IsString()
  @IsOptional()
  color?: string;

  @Column()
  @IsNumber()
  stock: number;

  @Column()
  @IsNumber()
  @IsOptional()
  discount?: number;

  @Column({ nullable: true })
  @IsDate()
  @IsOptional()
  expireDate?: Date;

  @Column()
  @IsNumber()
  minimumOrder: number;

  @Column()
  @IsNumber()
  maximumOrder: number;

  @Column()
  @IsString()
  type: string;

  @Column({
    default:true
  })
  @IsBoolean()
  @IsOptional()
  active: boolean;

  @CreateDateColumn()
  @IsDate()
  createdAt: Date;

  @Column({ nullable: true })
  @IsDate()
  updatedAt: Date;

  @Column({ nullable: true })
  @IsDate()
  deletedAt: Date;

  @ManyToOne(() => CatagoryEntity, (category) => category.Products)
  @JoinColumn({ name: 'categoryId' })
  category: CatagoryEntity;
}
