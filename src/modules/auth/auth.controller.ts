import {Body, Controller, Get, Post, UseGuards} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { AuthService } from './auth.service';
import {UserSignInDto} from './dto/userSignIn.dto';
import {User} from '../user/user.entity';
import {UserSignUpDto} from './dto/userSignUp.dto';

@Controller('auth')
export class AuthController {

  constructor(private readonly authService: AuthService) {}

  @Post('signIn')
  async signIn(@Body() userSignInDto: UserSignInDto) {
    const user = (new User()).fillFromSignInDto(userSignInDto);
    return await this.authService.signIn(user);
  }

  @Post('signUp')
  async signUp(@Body() userSignUpDto: UserSignUpDto) {
      const user = (new User()).fillFromSignUpDto(userSignUpDto);
      return await this.authService.signUp(user);
  }

  @Get('data')
  @UseGuards(AuthGuard())
  findAll() {
    return {response: 'Cooool'};
  }

}
