import {
  Injectable,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Equal, Repository } from 'typeorm';
import { paginationDTO } from 'src/shared/dto/pagination.dto';
import { ProductEntity } from './entities/product.entity';
@Injectable()
export class ProductService {
  constructor(
    @InjectRepository(ProductEntity)
    private readonly _productRepository: Repository<ProductEntity>,
  ) {}
  create(createProductDto: CreateProductDto) {
    try {
      return this._productRepository.save(createProductDto);
    } catch (e) {
      throw new InternalServerErrorException(e);
    }
  }

  findAll(pageAndLimit: paginationDTO) {
    try {
      const { page, limit } = pageAndLimit;
      return this._productRepository.find({
        skip: (page - 1) * limit,
        take: limit,
      });
    } catch (e) {
      throw new InternalServerErrorException(e);
    }
  }

  findByCategoryId(categoryId: number, pageAndLimit: paginationDTO) {
    const { page, limit } = pageAndLimit;
    return this._productRepository.find({
      where: {
        categoryId: Equal(categoryId),
      },
      skip: (page - 1) * limit,
      take: limit,
    });
  }

  findOne(id: number) {
    try {
      const existProduct = this._productRepository.findOneBy({
        id: Equal(id),
      });
      if (!existProduct) throw new NotFoundException();
      return existProduct;
    } catch (e) {
      throw new InternalServerErrorException(e);
    }
  }

  async update(id: number, updateProductDto: UpdateProductDto) {
    try {
      const existProduct = await this._productRepository.findOneBy({
        id: Equal(id),
      });
      if (!existProduct) throw new NotFoundException();
      existProduct.updatedAt = new Date();
      return this._productRepository.save(updateProductDto);
    } catch (e) {
      throw new InternalServerErrorException(e);
    }
  }

  async remove(id: number) {
    try {
      const existProduct = await this._productRepository.findOneBy({
        id: Equal(id),
      });
      if (!existProduct) throw new NotFoundException();
      existProduct.deletedAt = new Date();
      return this._productRepository.save(existProduct);
    } catch (e) {
      throw new InternalServerErrorException(e);
    }
  }
}
