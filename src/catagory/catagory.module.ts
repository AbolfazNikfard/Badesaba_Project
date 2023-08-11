import { Module } from '@nestjs/common';
import { CatagoryService } from './catagory.service';
import { CatagoryController } from './catagory.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CatagoryEntity } from './entities/catagory.entity';

@Module({
  imports:[TypeOrmModule.forFeature([CatagoryEntity])],
  controllers: [CatagoryController],
  providers: [CatagoryService],
  exports:[CatagoryService]
})
export class CatagoryModule {}
