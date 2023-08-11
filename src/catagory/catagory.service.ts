import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CatagoryEntity } from './entities/catagory.entity'; 

@Injectable()
export class CatagoryService {
  constructor(
    @InjectRepository(CatagoryEntity)
    private readonly catagoryRepository: Repository<CatagoryEntity>,
  ) {}

  async findAll(): Promise<CatagoryEntity[]> {
    return this.catagoryRepository.find();
  }

  async findOne(id: number): Promise<CatagoryEntity> {
    const catagory = await this.catagoryRepository.findOne(id);
    if (!catagory) {
      throw new NotFoundException('Catagory not found');
    }
    return catagory;
  }

  async create(catagoryData: Partial<CatagoryEntity>): Promise<CatagoryEntity> {
    const catagory = this.catagoryRepository.create(catagoryData);
    return this.catagoryRepository.save(catagory);
  }

  async update(id: number, catagoryData: Partial<CatagoryEntity>): Promise<CatagoryEntity> {
    await this.findOne(id); 
    await this.catagoryRepository.update(id, catagoryData);
    return this.findOne(id);
  }

  async delete(id: number): Promise<void> {
    const catagory = await this.findOne(id);
    await this.catagoryRepository.remove(catagory);
  }
}

