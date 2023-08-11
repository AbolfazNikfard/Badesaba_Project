import { OmitType, PartialType } from '@nestjs/mapped-types';
import { ProductEntity } from '../entities/product.entity';

export class UpdateProductDto extends PartialType(
  OmitType(ProductEntity, ['id', 'createdAt', 'deletedAt'] as const),
) {}
