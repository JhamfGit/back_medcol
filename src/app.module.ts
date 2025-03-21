import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller'; // <-- Importa el controlador
import { AppService } from './app.service'; // <-- Importa el servicio
import { IntegrationRfastModule } from './integration_rfast/integration_rfast.module';
import { GestDocumentalModule } from './gest_documental/gest_documental.module';
import { ControlMedicamentosModule } from './control_medicamentos/control_medicamentos.module';
import { AlertasModule } from './alertas/alertas.module';
import { AuditoriasModule } from './auditorias/auditorias.module';
import { AuthModule } from './auth/auth.module';
import { ConnectionModule } from './connection/connection.module';
import { ConfigModule } from './config/config.module';
import { ReportsModule } from './reports/reports.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: '',
      database: 'medcol_db',
      autoLoadEntities: true,
      synchronize: true, // ⚠️ Solo en desarrollo
    }),
    IntegrationRfastModule,
    GestDocumentalModule,
    ControlMedicamentosModule,
    AlertasModule,
    AuditoriasModule,
    AuthModule,
    ConnectionModule,
    ConfigModule,
    ReportsModule,
    UsersModule,
  ],
  controllers: [AppController], // <-- Agrega el controlador
  providers: [AppService], // <-- Agrega el servicio
})
export class AppModule {}
