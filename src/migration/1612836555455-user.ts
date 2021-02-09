import {getRepository, MigrationInterface, QueryRunner} from "typeorm";
import * as data from './init-user';

export class user1612836555455 implements MigrationInterface {
    name = 'user1612836555455'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `user` ADD `section` varchar(255) NOT NULL");
        await getRepository('user').save(data.UserInitial);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `user` DROP COLUMN `section`");
    }

}
