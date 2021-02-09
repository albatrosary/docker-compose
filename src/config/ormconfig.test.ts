import {ConnectionOptions} from 'typeorm';

const config: ConnectionOptions = {
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'root',
  password: 'password',
  database: 'TestDB',
  synchronize: false,
  logging: false,
  entities: [
    "src/entity/**/*.ts"
  ]
}

export = config;
