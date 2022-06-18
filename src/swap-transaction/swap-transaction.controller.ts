import { Body, Controller, Get, Param, Post } from "@nestjs/common";
import { CreateSwapTransactionDto } from "./dto";
import { SwapTransactionService } from "./swap-transaction.service";

@Controller('swap-transaction')
export class SwapTransactionController {
  constructor(private readonly swapTransactionService: SwapTransactionService) {
  }

  @Post()
  public async createTransaction(@Body() dto: CreateSwapTransactionDto) {
    return this.swapTransactionService.createSwapTransaction(dto);
  }

  @Get(':hash')
  getTransactionByHash(
    @Param('hash') hash: string,
  ) {
    return this.swapTransactionService.getSwapTransactionByHash(
      hash,
    );
  }
}
