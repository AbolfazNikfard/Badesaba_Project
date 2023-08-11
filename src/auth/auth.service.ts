import { HttpException, Injectable } from '@nestjs/common';
import { registerDto } from './dto/register.dto';
import { UpdateAuthDto } from './dto/update-auth.dto';
import { UserService } from 'src/user/user.service';

@Injectable()
export class AuthService {
  constructor(private readonly userService:UserService){}
  register(registerDto: registerDto) {
    const user = this.userService.findByEmail(registerDto.email)
    if(user){
      throw new HttpException('user already exists', 400)
    }
  }


}
