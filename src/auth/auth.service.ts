import {
  Injectable,
  UnauthorizedException,
  BadRequestException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { UsersService } from '../users/users.service';

@Injectable()
export class AuthService {
  constructor(
    private readonly usersService: UsersService,
    private readonly jwtService: JwtService,
  ) {}

  async validateUser(usuario: string, password: string): Promise<any> {
    const user = await this.usersService.findByUsername(usuario);
    console.log('Usuario encontrado:', user);
    console.log('Password recibido:', password);
    if (user && user.pass && await bcrypt.compare(password, user.pass)) {
      const { pass, ...result } = user;
      return result;
    }
    throw new UnauthorizedException('Credenciales incorrectas');
  }
  

  async login(user: any) {
    const payload = { sub: user.id_usuario, username: user.usuario };
    return {
      access_token: this.jwtService.sign(payload),
      user,
    };
  }

  async register(usuario: string, password: string) {
    const existingUser = await this.usersService.findByUsername(usuario);
    if (existingUser) {
      throw new BadRequestException('El usuario ya existe');
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = await this.usersService.createUser(usuario, hashedPassword);

    return this.login(newUser); // Devuelve token al registrarse
  }
}
