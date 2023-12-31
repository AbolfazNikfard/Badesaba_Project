import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
  UseGuards,
} from '@nestjs/common';
import { ProductService } from './product.service';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { paginationDTO } from 'src/shared/dto/pagination.dto';
import { jwtStrategy } from 'src/auth/strategis/jwt.strategy';

@Controller('product')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Post()
  @UseGuards(jwtStrategy)
  create(@Body() createProductDto: CreateProductDto) {
    return this.productService.create(createProductDto);
  }

  @Get()
  findAll(@Query() pageAndLimit: paginationDTO) {
    return this.productService.findAll(pageAndLimit);
  }
  @Get('/findByCategory/:categoryId')
  findByCategoryId(
    @Param() categoryId: string,
    @Query() pageAndLimit: paginationDTO,
  ) {
    return this.productService.findByCategoryId(+categoryId, pageAndLimit);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.productService.findOne(+id);
  }

  @Patch()
  update(@Body() updateProductDto: UpdateProductDto) {
    return this.productService.update(updateProductDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.productService.remove(+id);
  }
}
