import {ConnectionOptions} from 'typeorm';

const config: ConnectionOptions = {
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'root',
  password: 'password',
  database: 'TestDB',
  synchronize: true,
  logging: false,
  entities: [
    "dist/entity/**/*.js"
  ],
  migrations: [
    "dist/migrations/**/*.js"
  ],
  cli: {
    entitiesDir: 'src/entity',
    migrationsDir: 'src/migration',
  },
}

export = config;
