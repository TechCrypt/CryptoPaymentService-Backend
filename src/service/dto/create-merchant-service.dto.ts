import {
  IsNotEmpty,
  IsOptional,
  IsString
} from "class-validator";

export class CreateMerchantServiceDto {
  @IsString()
  @IsNotEmpty()
  service_name: string;

  @IsString()
  @IsOptional()
  service_logo: string;

  @IsString()
  @IsNotEmpty()
  service_address: string;

  @IsString()
  @IsNotEmpty()
  token_name: string;

  @IsString()
  @IsNotEmpty()
  token_address: string

  @IsString()
  @IsNotEmpty()
  token_symbol: string

  @IsString()
  @IsNotEmpty()
  token_image: string
}