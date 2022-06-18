import {
  IsDate, IsEthereumAddress, isEthereumAddress,
  IsNotEmpty,
  IsNumber,
  IsString
} from "class-validator";

export class CreateTransactionDto {
  @IsString()
  @IsNotEmpty()
  @IsEthereumAddress()
  from_address: string;

  @IsString()
  @IsNotEmpty()
  @IsEthereumAddress()
  to_address: string;

  @IsString()
  @IsNotEmpty()
  transaction_hash: string

  @IsNumber()
  @IsNotEmpty()
  price: number;

  @IsString()
  @IsNotEmpty()
  product_name: string

  @IsString()
  symbol: string

  @IsString()
  @IsNotEmpty()
  product_img: string
}