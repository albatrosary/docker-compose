import {getRepository, MigrationInterface, QueryRunner} from "typeorm";

export class User1612834690935 implements MigrationInterface {
    name = 'User1612834690935'

    UserInitial = [
        {
        id: 1,
        firstName: 'YADAMA',
        lastName: 'HANAKO',
        age: 20
        },
        {
        id: 2,
        firstName: 'コマリフト',
        lastName: 'コマリフト-lastName',
        age: 35
        },
        {
        id: 3,
        firstName: 'クレーン',
        lastName: 'クレーン-lastName',
        age: 40
        },
    ];

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `user` ADD `age` int NOT NULL");
        await getRepository('User').save(this.UserInitial);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `user` DROP COLUMN `age`");
    }

}
