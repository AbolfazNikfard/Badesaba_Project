import { HttpException, Injectable } from '@nestjs/common';
import { registerDto } from './dto/register.dto';
import { UserService } from 'src/user/user.service';
import * as bcrypt from 'bcryptjs';
import { loginDto } from './dto/login.dto';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UserService,
    private readonly jwtService: JwtService,
    ) {}

  async register(registerDto: registerDto) {
    console.log('back');
    const user = await this.userService.findByEmail(registerDto.email);
    console.log("after");
    if (user) {
      throw new HttpException('user already exists', 400);
    }

    registerDto.password = await bcrypt.hash(registerDto.password, 10);
    return await this.userService.create(registerDto);
  }

  async login(loginDto:loginDto) {

    const user = await this.userService.findByEmail(loginDto.email);
    if (!user) {
      throw new HttpException('User not found', 404);
    }
    const isPasswordMath = await bcrypt.compare(
      loginDto.password,
      user.password,
    );
    if(!isPasswordMath){
      throw new HttpException("wrong password",400)
    }
    
    const access_token = this.jwtService.sign({
      sub: user.id,
      email: user.email,
    });
    
    return { access_token: access_token };
  }
}
