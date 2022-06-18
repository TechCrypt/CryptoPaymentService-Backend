import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn } from "typeorm";

@Entity('merchants')
export class Merchant {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({length: 255, nullable: false})
  service_name: string;

  @Column({length: 255, nullable: true})
  service_logo: string;

  @Column({length: 255, nullable: false})
  service_address: string

  @Column({length: 255, nullable: false})
  token_name: string;

  @Column({length: 255, nullable: false})
  token_address: string;

  @Column({length: 255, nullable: false})
  token_symbol: string;

  @Column({length: 255, nullable: false})
  token_image: string;
}