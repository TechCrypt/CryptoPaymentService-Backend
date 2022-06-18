import { Injectable } from '@nestjs/common';
import { InjectRepository } from "@nestjs/typeorm";
import { Transaction } from "../entities/transaction.entity";
import { Repository } from "typeorm";
import { SwapTransaction } from "../entities/swap-transactions.entity";
import { CreateSwapTransactionDto } from "./dto";

@Injectable()
export class SwapTransactionService {

  constructor(@InjectRepository(SwapTransaction)
              private readonly repository: Repository<SwapTransaction>) {
  }


  createSwapTransaction(dto: CreateSwapTransactionDto): Promise<SwapTransaction>{
    const swapTransaction: SwapTransaction = new SwapTransaction();

    swapTransaction.token_from_address = dto.token_from_address;
    swapTransaction.token_from_symbol = dto.token_from_symbol;
    swapTransaction.token_from_value = dto.token_from_value;
    swapTransaction.token_to_address = dto.token_to_address;
    swapTransaction.token_to_symbol = dto.token_to_symbol;
    swapTransaction.token_to_value = dto.token_to_value;
    swapTransaction.transaction_hash = dto.transaction_hash;
    swapTransaction.date = dto.date;

    return this.repository.save(swapTransaction);
  }

  getSwapTransactionByHash(hash: string): Promise<SwapTransaction>{
    return this.repository.findOne({
      where:
        {
          transaction_hash: hash
        }
    });
  }
}
