import {MigrationInterface, QueryRunner} from "typeorm";

export class transaction1655580963384 implements MigrationInterface {
    name = 'transaction1655580963384'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "merchants" ("id" SERIAL NOT NULL, "service_name" character varying(255) NOT NULL, "service_logo" character varying(255), "service_address" character varying(255) NOT NULL, "token_name" character varying(255) NOT NULL, "token_address" character varying(255) NOT NULL, "token_symbol" character varying(255) NOT NULL, "token_image" character varying(255) NOT NULL, CONSTRAINT "PK_4fd312ef25f8e05ad47bfe7ed25" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "swap_transactions" ("id" SERIAL NOT NULL, "token_from_address" character varying(255) NOT NULL, "token_from_symbol" character varying(255) NOT NULL, "token_from_value" integer NOT NULL, "token_to_address" character varying(255) NOT NULL, "token_to_symbol" character varying(255) NOT NULL, "token_to_value" integer NOT NULL, "transaction_hash" text NOT NULL, "date" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_1aa502020ff2dcb5a6628e087cb" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "transactions" ("id" SERIAL NOT NULL, "from_address" character varying(255) NOT NULL, "to_address" character varying(255) NOT NULL, "transaction_hash" text NOT NULL, "symbol" character varying(255) NOT NULL, "date" TIMESTAMP NOT NULL DEFAULT now(), "price" integer NOT NULL, "product_name" character varying(255) NOT NULL, "product_img" character varying(255) NOT NULL, CONSTRAINT "PK_a219afd8dd77ed80f5a862f1db9" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "transactions"`);
        await queryRunner.query(`DROP TABLE "swap_transactions"`);
        await queryRunner.query(`DROP TABLE "merchants"`);
    }

}
