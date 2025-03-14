import { Module } from '@nestjs/common';
import { GestDocumentalController } from './gest_documental.controller';
import { GestDocumentalService } from './gest_documental.service';

@Module({
  controllers: [GestDocumentalController],
  providers: [GestDocumentalService]
})
export class GestDocumentalModule {}
