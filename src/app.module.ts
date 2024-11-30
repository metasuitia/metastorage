import { Module } from '@nestjs/common';
import { StorageModule } from './storage/storage.module';


@Module({
  imports: [StorageModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
