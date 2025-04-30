import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('tb_usuarios')
export class Usuario {
  @PrimaryGeneratedColumn()
  id_usuario: number;

  @Column({ type: 'varchar', length: 255, nullable: false })  // Asegúrate de que esta columna no permita valores NULL
  usuario: string;

  @Column({ type: 'varchar', length: 255, nullable: false })  // Esta columna tampoco debería permitir NULL
  pass: string;
}