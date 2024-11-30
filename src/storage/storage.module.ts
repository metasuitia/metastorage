import { Module } from '@nestjs/common';
import { StorageService } from './storage.service';
import { StorageController } from './storage.controller';
import { NatsModule } from 'src/transports/nats.module';

@Module({
  controllers: [StorageController],
  providers: [StorageService],
  imports: [
    NatsModule
  ]
})
export class StorageModule {}
