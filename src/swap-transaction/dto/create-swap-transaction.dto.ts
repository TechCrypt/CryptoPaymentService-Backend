import {
  IsDate,
  IsEthereumAddress,
  IsNotEmpty,
  IsNumber,
  IsString
} from "class-validator";

export class CreateSwapTransactionDto {
  @IsString()
  @IsNotEmpty()
  token_from_address: string;

  @IsString()
  @IsNotEmpty()
  token_from_symbol: string;

  @IsNumber()
  @IsNotEmpty()
  token_from_value: number

  @IsString()
  @IsNotEmpty()
  token_to_address: string;

  @IsString()
  @IsNotEmpty()
  token_to_symbol: string;

  @IsNumber()
  @IsNotEmpty()
  token_to_value: number

  @IsString()
  @IsNotEmpty()
  transaction_hash: string

  @IsDate()
  @IsNotEmpty()
  date: Date
}