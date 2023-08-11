import { OmitType, PartialType } from '@nestjs/mapped-types';
import { CreateCatagoryDto } from './create-catagory.dto';
import { CatagoryEntity } from 'catagory/entities/catagory.entity';

export class UpdateCatagoryDto extends PartialType(OmitType (CatagoryEntity,["ID","createdAt","deletedAt"] as const)) {}
