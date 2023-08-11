import { HttpException, Injectable } from '@nestjs/common';
import { registerDto } from './dto/register.dto';
import { UpdateAuthDto } from './dto/update-auth.dto';
import { UserService } from 'src/user/user.service';
import * as bcrypt from 'bcryptjs';

@Injectable()
export class AuthService {
  constructor(private readonly userService:UserService){}
  async register(registerDto: registerDto) {
    const user = await this.userService.findByEmail(registerDto.email)
    if(user){
      throw new HttpException('user already exists', 400)
    }
    registerDto.password = await bcrypt.hash(registerDto.password , 10)
    return await this.userService.create(registerDto)
  }


}
