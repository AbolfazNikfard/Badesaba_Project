import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Equal, Repository } from 'typeorm';
import { CatagoryEntity } from './entities/catagory.entity';
import { CreateCatagoryDto } from './dto/create-catagory.dto';
import { UpdateCatagoryDto } from './dto/update-catagory.dto';

@Injectable()
export class CatagoryService {
  constructor(
    @InjectRepository(CatagoryEntity)
    private readonly _catagoryRepository: Repository<CatagoryEntity>,
  ) {}

  async findAll(): Promise<CatagoryEntity[]> {
    return this._catagoryRepository.find();
  }

  async findOne(id: number): Promise<CatagoryEntity> {
    const catagory = await this._catagoryRepository.findOneBy({
      Id: Equal(id),
    });
    if (!catagory) {
      throw new NotFoundException('Catagory not found');
    }
    return catagory;
  }

  create(catagoryData: CreateCatagoryDto): Promise<CatagoryEntity> {
    return this._catagoryRepository.save(catagoryData);
  }

  async update(catagoryData: UpdateCatagoryDto): Promise<CatagoryEntity> {
    const existCategory = await this._catagoryRepository.findOneBy({
      Id: catagoryData.Id,
    });
    if (!existCategory) throw new NotFoundException('category not found');
    catagoryData.updatedAt = new Date();
    return this._catagoryRepository.save(catagoryData);
  }

  async delete(id: number) {
    const catagory = await this._catagoryRepository.findOneBy({ Id: id });
    if (!catagory) throw new NotFoundException('category not found');
    catagory.deletedAt = new Date();
    return this._catagoryRepository.save(catagory);
  }
}
