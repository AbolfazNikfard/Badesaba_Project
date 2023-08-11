import { MigrationInterface, QueryRunner } from "typeorm";

export class UpdateProductTable1691737837891 implements MigrationInterface {
    name = 'UpdateProductTable1691737837891'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "products" ALTER COLUMN "categoryId" SET NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "products" ALTER COLUMN "categoryId" DROP NOT NULL`);
    }

}
