import { DynamicModule, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import * as ormconfig from './config/ormconfig';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { User } from './entity/user';

export function DatabaseOrmModule(): DynamicModule {
  console.log('process.env.NODE_ENV', process.env.NODE_ENV);
  return TypeOrmModule.forRoot(ormconfig);
}

@Module({
  imports: [DatabaseOrmModule(), TypeOrmModule.forFeature([User])],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
