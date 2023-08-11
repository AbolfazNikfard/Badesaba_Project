import { IsNumber } from 'class-validator';
import { ProductEntity } from '../../product/entities/product.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryColumn,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('carts')
export class CartEntity {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  @IsNumber()
  userId: number;
  @Column()
  @IsNumber()
  productId: number;

  @Column()
  @IsNumber()
  quantity: number;

  @CreateDateColumn()
  createdAt: Date;

  @ManyToOne(() => UsersEntity, (user) => user.carts)
  @JoinColumn({ name: 'userId' })
  user: UsersEntity;
  @ManyToOne(() => ProductEntity, (product) => product.carts)
  @JoinColumn({ name: 'productId' })
  product: ProductEntity;
}
