import { Module } from '@nestjs/common';
import { SwapTransactionController } from './swap-transaction.controller';
import { SwapTransactionService } from './swap-transaction.service';
import { TypeOrmModule } from "@nestjs/typeorm";
import { SwapTransaction } from "../entities/swap-transactions.entity";

@Module({
  imports:[TypeOrmModule.forFeature([SwapTransaction])],
  controllers: [SwapTransactionController],
  providers: [SwapTransactionService]
})
export class SwapTransactionModule {}
