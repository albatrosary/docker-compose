import {getRepository, MigrationInterface, QueryRunner} from "typeorm";

export class UserMigration1612756233593 implements MigrationInterface {
  UserFacilityInitial = [
    {
      id: 1,
      firstName: 'YADAMA',
      lastName: 'HANAKO'
    },
    {
      id: 2,
      firstName: 'コマリフト',
      lastName: 'コマリフト-lastName',
    },
    {
      id: 3,
      firstName: 'クレーン',
      lastName: 'クレーン-lastName',
    },
  ];
  public async up(queryRunner: QueryRunner): Promise<void> {
    await getRepository('User').save(this.UserFacilityInitial);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
  }

}
