import { OmitType } from "@nestjs/mapped-types";
import { CatagoryEntity } from "catagory/entities/catagory.entity";

export class CreateCatagoryDto extends OmitType(CatagoryEntity,["ID","createdAt","updatedAt","deletedAt"]as const) {}

