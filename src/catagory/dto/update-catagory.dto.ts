import { OmitType, PartialType } from '@nestjs/mapped-types';
import { CatagoryEntity } from 'src/catagory/entities/catagory.entity';

export class UpdateCatagoryDto extends OmitType(CatagoryEntity,["createdAt","deletedAt"] as const) {}
