import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { UserService } from 'src/user/user.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersEntity } from 'src/user/entities/user.entity';
import { UserModule } from 'src/user/user.module';
import { JwtModule, JwtService } from '@nestjs/jwt';
import { jwtStrategy } from './strategis/jwt.strategy';

@Module({
  imports: [UserModule,JwtModule.register({secret:'secret',signOptions:{expiresIn:'1d'}})],
  controllers: [AuthController],
  providers: [AuthService,JwtService,jwtStrategy],
})
export class AuthModule {}
