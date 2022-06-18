import { Module } from '@nestjs/common';
import { MerchantServiceController } from './merchant-service.controller';
import { MerchantService } from './merchant-service.service';
import { TypeOrmModule } from "@nestjs/typeorm";
import { Merchant } from "../entities/merchant-service.entity";

@Module({
  imports:[TypeOrmModule.forFeature([Merchant])],
  controllers: [MerchantServiceController],
  providers: [MerchantService]
})
export class MerchantServiceModule {}
