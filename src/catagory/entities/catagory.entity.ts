import { IsString } from "class-validator";
import { IsNumber } from "class-validator";
import { IsDate } from "class-validator";
import { IsBoolean } from "class-validator";
import { IsOptional } from "class-validator";
import { Column, CreateDateColumn, Entity, IsNull, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Product } from '../../src/product/entities/product.entity';


@Entity('Catagories')

export class CatagoryEntity {
    @PrimaryGeneratedColumn()
    @IsNumber()
    ID:number
    @Column()
    @IsString()
    name:string;
    @Column()
    @IsString()
    icon:string;
    @Column()
    @IsNumber()
    order:number;
    @Column({nullable:true,default:true})
    @IsNumber()
    @IsOptional()
    parrentId:number;
    @Column({default:true})
    @IsBoolean()
    active:boolean;
    @CreateDateColumn()
    @IsDate()
    createdAt:Date;
    @CreateDateColumn()
    @IsDate()
    updatedAt:Date;
    @CreateDateColumn()pu
    @IsDate()
    deletedAt:Date;
    @OneToMany(()=>ProductEntity,(products)=>products.category)
    Products:ProductEntity[];
}

