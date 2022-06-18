import { Injectable } from '@nestjs/common';
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Merchant } from "../entities/merchant-service.entity";
import { CreateMerchantServiceDto } from "./dto";

@Injectable()
export class MerchantService {
  constructor(@InjectRepository(Merchant)
              private readonly repository: Repository<Merchant>) {
  }

  createMerchant(dto: CreateMerchantServiceDto): Promise<Merchant>{
    const merchantService: Merchant = new Merchant();
    merchantService.service_name = dto.service_name;
    merchantService.service_logo = dto.service_logo;
    merchantService.service_address = dto.service_address;
    merchantService.token_address = dto.token_address;
    merchantService.token_name = dto.token_name;
    merchantService.token_image = dto.token_image;
    merchantService.token_symbol = dto.token_symbol;

    return this.repository.save(merchantService);
  }

  getMerchantByAddress(service_address: string): Promise<Merchant>{
    return this.repository.findOne({
      where:
        {
          service_address: service_address
        }
    });
  }
}
