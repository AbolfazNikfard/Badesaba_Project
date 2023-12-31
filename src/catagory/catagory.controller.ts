import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CatagoryService } from './catagory.service';
import { CreateCatagoryDto } from './dto/create-catagory.dto';
import { UpdateCatagoryDto } from './dto/update-catagory.dto';

@Controller('catagory')
export class CatagoryController {
  constructor(private readonly catagoryService: CatagoryService) {}

  @Post()
  create(@Body() createCatagoryDto: CreateCatagoryDto) {
    return this.catagoryService.create(createCatagoryDto);
  }

  @Get()
  findAll() {
    return this.catagoryService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.catagoryService.findOne(+id);
  }

  @Patch()
  update(@Body() updateCatagoryDto: UpdateCatagoryDto) {
    return this.catagoryService.update(updateCatagoryDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.catagoryService.delete(+id);
  }
}
