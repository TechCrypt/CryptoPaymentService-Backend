import { Injectable } from '@nestjs/common';
import { CreateTransactionDto } from "./dto";
import { Repository } from "typeorm";
import { Transaction } from "../entities/transaction.entity";
import { InjectRepository } from "@nestjs/typeorm";

@Injectable()
export class TransactionService {
  constructor(@InjectRepository(Transaction)
              private readonly repository: Repository<Transaction>) {
  }


  createTransaction(dto: CreateTransactionDto): Promise<Transaction>{
    const transaction: Transaction = new Transaction();

    transaction.from_address = dto.from_address;
    transaction.to_address = dto.to_address;
    transaction.transaction_hash = dto.transaction_hash;
    transaction.price = dto.price;
    transaction.symbol = dto.symbol;
    transaction.product_name = dto.product_name;
    transaction.product_img = dto.product_img;

    return this.repository.save(transaction);
  }

  getTransactionByHash(hash: string): Promise<Transaction>{
    return this.repository.findOne({
      where:
        {
          transaction_hash: hash
        }
    });
  }


}
