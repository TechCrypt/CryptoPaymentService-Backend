import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TransactionModule } from './transaction/transaction.module';
import { TypeOrmModule } from "@nestjs/typeorm";
import { SwapTransactionModule } from './swap-transaction/swap-transaction.module';
import { MerchantServiceModule } from './service/merchant-service.module';

@Module({
  imports: [TransactionModule,
    TypeOrmModule.forRoot({
      type: "postgres",
      host: 'localhost',
      port: 5432,
      username: 'yera',
      password: 'postgres',
      database: 'd',
      entities: ["dist/**/*.entity{ .ts,.js}"],
      synchronize: false,
      migrations: ["dist/migrations/*{.ts,.js}"],
      migrationsTableName: "migrations_typeorm",
      migrationsRun: true,
    }),
    SwapTransactionModule,
    MerchantServiceModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
