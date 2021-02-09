import { Test, TestingModule } from '@nestjs/testing';
import { TypeOrmModule } from '@nestjs/typeorm';

import * as ormconfig from './config/ormconfig.test';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { User } from './entity/user';

describe('AppController', () => {
  let appController: AppController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      imports: [TypeOrmModule.forRoot(ormconfig), TypeOrmModule.forFeature([User])],
      controllers: [AppController],
      providers: [AppService],
    }).compile();

    appController = app.get<AppController>(AppController);
  });

  describe('root', () => {
    it('should return "User Data"', done => {
      appController.getHello()
        .then(d => {
          expect(d).toHaveLength(3);
          expect(d[0].id).toBe(1);
        })
        .finally(done());
    });
  });
});
