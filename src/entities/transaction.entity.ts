import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn } from "typeorm";

@Entity('transactions')
export class Transaction {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({length: 255, nullable: false})
  from_address: string;

  @Column({length: 255, nullable: false})
  to_address: string;

  @Column({type: 'text', nullable: false})
  transaction_hash: string

  @Column({length: 255, nullable: false})
  symbol: string;

  @CreateDateColumn({name: 'date'})
  date: Date

  @Column({type: "integer", nullable: false})
  price: number

  @Column({length: 255, nullable: false})
  product_name: string;

  @Column({length: 255, nullable: false})
  product_img: string;
}