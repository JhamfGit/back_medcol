import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}

  async findByEmail(email: string) {
    return this.prisma.usuario.findFirst({
      where: { usuario: email },
    });
  }

  async createUser(usuario: string, pass: string) {
    return this.prisma.usuario.create({
      data: {
        usuario,
        pass,
      },
    });
  }
}
