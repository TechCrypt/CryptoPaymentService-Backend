import { Body, Controller, Get, Param, Post } from "@nestjs/common";
import { CreateMerchantServiceDto } from "./dto";
import { MerchantService } from "./merchant-service.service";

@Controller('service')
export class MerchantServiceController {
  constructor(private readonly merchantService: MerchantService) {
  }

  @Post()
  public async createTransaction(@Body() dto: CreateMerchantServiceDto) {
    return this.merchantService.createMerchant(dto);
  }

  @Get(':address')
  getMerchantByAddress(
    @Param('address') address: string,
  ) {
    return this.merchantService.getMerchantByAddress(
      address,
    );
  }
}
