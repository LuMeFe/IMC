import { Module } from '@nestjs/common';
import { ImcController } from './imc.controller';

@Module({
  controllers: [ImcController],
})
export class ImcModule {}
