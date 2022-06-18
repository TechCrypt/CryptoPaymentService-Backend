import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn } from "typeorm";

@Entity('swap_transactions')
export class SwapTransaction {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({length: 255, nullable: false})
  token_from_address: string;

  @Column({length: 255, nullable: false})
  token_from_symbol: string;

  @Column({type: "integer", nullable: false})
  token_from_value: number

  @Column({length: 255, nullable: false})
  token_to_address: string;

  @Column({length: 255, nullable: false})
  token_to_symbol: string;

  @Column({type: "integer", nullable: false})
  token_to_value: number

  @Column({type: 'text', nullable: false})
  transaction_hash: string

  @CreateDateColumn({name: 'date'})
  date: Date

}