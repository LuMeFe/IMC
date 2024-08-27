import { Module } from '@nestjs/common';
import { ImcModule } from './imc/imc.module';

@Module({
  imports: [ImcModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
