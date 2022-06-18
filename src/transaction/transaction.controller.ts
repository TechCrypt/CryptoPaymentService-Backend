import { Body, Controller, Get, Param, ParseIntPipe, Post } from "@nestjs/common";
import { AppService } from "../app.service";
import { TransactionService } from "./transaction.service";
import { CreateTransactionDto } from "./dto";

@Controller('transactions')
export class TransactionController {
  constructor(private readonly transactionService: TransactionService) {
  }

  @Post()
  public async createTransaction(@Body() dto: CreateTransactionDto) {
    return this.transactionService.createTransaction(dto);
  }

  @Get(':hash')
  getTransactionByHash(
    @Param('hash') hash: string,
  ) {
    return this.transactionService.getTransactionByHash(
      hash,
    );
  }

}
