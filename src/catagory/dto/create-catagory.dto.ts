import { OmitType } from "@nestjs/mapped-types";
import { CatagoryEntity } from "src/catagory/entities/catagory.entity";

export class CreateCatagoryDto extends OmitType(CatagoryEntity,["Id","createdAt","updatedAt","deletedAt"]as const) {}

