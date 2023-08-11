import { MigrationInterface, QueryRunner } from "typeorm";

export class UpdateTables1691751771683 implements MigrationInterface {
    name = 'UpdateTables1691751771683'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "Catagories" ("Id" SERIAL NOT NULL, "name" character varying NOT NULL, "icon" character varying NOT NULL, "order" integer NOT NULL, "parrentId" integer, "active" boolean NOT NULL DEFAULT true, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL, "deletedAt" TIMESTAMP NOT NULL, CONSTRAINT "PK_701ab966d3a35fc8417d2952f2d" PRIMARY KEY ("Id"))`);
        await queryRunner.query(`ALTER TABLE "products" DROP CONSTRAINT "PK_0806c755e0aca124e67c0cf6d7d"`);
        await queryRunner.query(`ALTER TABLE "products" DROP COLUMN "id"`);
        await queryRunner.query(`ALTER TABLE "products" ADD "Id" SERIAL NOT NULL`);
        await queryRunner.query(`ALTER TABLE "products" ADD CONSTRAINT "PK_e2b2c8ac57e811670548d5fb25b" PRIMARY KEY ("Id")`);
        await queryRunner.query(`ALTER TABLE "products" ALTER COLUMN "description" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "products" ALTER COLUMN "expireDate" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "products" ALTER COLUMN "expireDate" DROP DEFAULT`);
        await queryRunner.query(`ALTER TABLE "products" ALTER COLUMN "active" SET DEFAULT true`);
        await queryRunner.query(`ALTER TABLE "products" ALTER COLUMN "updatedAt" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "products" ALTER COLUMN "updatedAt" DROP DEFAULT`);
        await queryRunner.query(`ALTER TABLE "products" ALTER COLUMN "deletedAt" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "products" ALTER COLUMN "deletedAt" DROP DEFAULT`);
        await queryRunner.query(`ALTER TABLE "products" ADD CONSTRAINT "FK_ff56834e735fa78a15d0cf21926" FOREIGN KEY ("categoryId") REFERENCES "Catagories"("Id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "products" DROP CONSTRAINT "FK_ff56834e735fa78a15d0cf21926"`);
        await queryRunner.query(`ALTER TABLE "products" ALTER COLUMN "deletedAt" SET DEFAULT now()`);
        await queryRunner.query(`ALTER TABLE "products" ALTER COLUMN "deletedAt" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "products" ALTER COLUMN "updatedAt" SET DEFAULT now()`);
        await queryRunner.query(`ALTER TABLE "products" ALTER COLUMN "updatedAt" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "products" ALTER COLUMN "active" DROP DEFAULT`);
        await queryRunner.query(`ALTER TABLE "products" ALTER COLUMN "expireDate" SET DEFAULT now()`);
        await queryRunner.query(`ALTER TABLE "products" ALTER COLUMN "expireDate" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "products" ALTER COLUMN "description" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "products" DROP CONSTRAINT "PK_e2b2c8ac57e811670548d5fb25b"`);
        await queryRunner.query(`ALTER TABLE "products" DROP COLUMN "Id"`);
        await queryRunner.query(`ALTER TABLE "products" ADD "id" SERIAL NOT NULL`);
        await queryRunner.query(`ALTER TABLE "products" ADD CONSTRAINT "PK_0806c755e0aca124e67c0cf6d7d" PRIMARY KEY ("id")`);
        await queryRunner.query(`DROP TABLE "Catagories"`);
    }

}
