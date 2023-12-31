import { OmitType } from "@nestjs/mapped-types";
import { ProductEntity } from "../entities/product.entity";

export class CreateProductDto extends OmitType(ProductEntity,['createdAt','Id','updatedAt','deletedAt'] as const) {}
