import { DynamicModule, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

// import * as ormconfig from './config/ormconfig';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { User } from './entity/User';

export function DatabaseOrmModule(): DynamicModule {
  return TypeOrmModule.forRoot({
    "type": "mysql",
    "host": "localhost",
    "port": 3306,
    "username": "root",
    "password": "password",
    "database": "TestDB",
    "synchronize": true,
    "logging": false,
    "entities": [
      "dist/entity/**/*.js"
    ],
    "migrations": [
      "dist/migrations/**/*.js"
    ],
    "cli": {
      "entitiesDir": "src/entity",
      "migrationsDir": "src/migration"
    }
  });
}

@Module({
  imports: [TypeOrmModule.forRoot(), TypeOrmModule.forFeature([User])],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
