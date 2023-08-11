import { OmitType } from "@nestjs/mapped-types";
import { CartEntity } from "../entities/cart.entity";

export class CreateCartDto extends OmitType(CartEntity,['createdAt','id'] as const){}
