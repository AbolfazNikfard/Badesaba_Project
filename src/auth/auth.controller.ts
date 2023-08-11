import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AuthService } from './auth.service';
import { loginDto } from './dto/login.dto';
import { registerDto } from './dto/register.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  async login(loginDto:loginDto){
    return await this.authService.login(loginDto)
  }

  @Post('register')
  async register(registerDto: registerDto){
    return await this.authService.register(registerDto)
  }

}
