import { Module } from '@nestjs/common';
import { IntegrationRfastController } from './integration_rfast.controller';
import { IntegrationRfastService } from './integration_rfast.service';

@Module({
  controllers: [IntegrationRfastController],
  providers: [IntegrationRfastService]
})
export class IntegrationRfastModule {}
