import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UsersEntity } from './entities/user.entity';

@Injectable()
export class UserService {
  constructor(@InjectRepository(UsersEntity)
  private usersRepository: Repository<UsersEntity>){}

  async create(createUserDto: CreateUserDto) {
    const user = new UsersEntity();
    user.name = createUserDto.name
    user.email = createUserDto.email
    user.password = createUserDto.password
    user.family = createUserDto.family;
    user.age = createUserDto.age;
    user.cellphone = createUserDto.cellphone;
    user.birthdate = createUserDto.birthdate;
    user.active = '';
    user.createdAt = new Date();
    user.updatedAt = new Date();
    user.deletedAt = new Date();
    const createdUser = await this.usersRepository.save(user);
    return createdUser;
  }

  async findByEmail(email:string) {
    return await this.usersRepository.findOne({
      where: { email: email },
    });
  }

  update(){}

  remove(){}

}
