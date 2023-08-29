import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateCartDto } from './dto/create-cart.dto';
import { UpdateCartDto } from './dto/update-cart.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { CartEntity } from './entities/cart.entity';
import { Equal, Repository } from 'typeorm';

@Injectable()
export class CartService {
  constructor(
    @InjectRepository(CartEntity)
    private readonly _cartRepository: Repository<CartEntity>,
  ) {}
  create(createCartDto: CreateCartDto) {
    return this._cartRepository.save(createCartDto);
  }

  findAll() {
    return this._cartRepository.find();
  }

  findOne(id: number) {
    return this._cartRepository.findOneBy({ id: id });
  }

  remove(id: number) {
    return `This action removes a #${id} cart`;
  }
}
