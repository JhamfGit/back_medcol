import { Controller, Post, Body } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  async login(@Body() body: { usuario: string; password: string }) {
    const user = await this.authService.validateUser(body.usuario, body.password);
    return this.authService.login(user);
  }

  @Post('register')
  async register(@Body() body: { usuario: string; password: string }) {
    return this.authService.register(body.usuario, body.password);
  }
}
