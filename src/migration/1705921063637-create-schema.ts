import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateSchema1705921063637 implements MigrationInterface {
    name = 'CreateSchema1705921063637'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`product\` (\`id\` int NOT NULL AUTO_INCREMENT, \`image\` varchar(128) CHARACTER SET "utf8mb4" COLLATE "utf8mb4_general_ci" NULL, \`name\` varchar(255) CHARACTER SET "utf8mb4" COLLATE "utf8mb4_general_ci" NOT NULL, \`description\` text CHARACTER SET "utf8mb4" COLLATE "utf8mb4_general_ci" NULL, \`price\` float NULL, \`color\` varchar(16) CHARACTER SET "utf8mb4" COLLATE "utf8mb4_general_ci" NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE \`product\``);
    }

}
