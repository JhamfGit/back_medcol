import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Usuario } from './usuario.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(Usuario)
    private readonly userRepository: Repository<Usuario>,
  ) {}

  async findByUsername(usuario: string): Promise<Usuario | null> {
    return this.userRepository.findOne({ where: { usuario } });
  }

  async createUser(usuario: string, hashedPassword: string): Promise<Usuario> {
    const newUser = this.userRepository.create({ usuario, pass: hashedPassword });
    return this.userRepository.save(newUser);
  }
}