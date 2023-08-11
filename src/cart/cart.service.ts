import { Injectable } from '@nestjs/common';
import { CreateCartDto } from './dto/create-cart.dto';
import { UpdateCartDto } from './dto/update-cart.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { CartEntity } from './entities/cart.entity';
import { Repository } from 'typeorm';

@Injectable()
export class CartService {
  constructor(
    @InjectRepository(CartEntity)
    private readonly _cartRepository : Repository<CartEntity>
  ){}
  create(createCartDto: CreateCartDto) {
    return this._cartRepository.save(createCartDto);
  }

  findAll() {
    return `This action returns all cart`;
  }

  findOne(id: number) {
    return `This action returns a #${id} cart`;
  }

  async update(id: number, quntity: number) {
    const existCart = await this._cartRepository.findOneBy({})
  }

  remove(id: number) {
    return `This action removes a #${id} cart`;
  }
}
