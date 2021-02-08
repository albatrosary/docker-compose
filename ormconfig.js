module.exports = {
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'root',
  password: 'password',
  database: 'TestDB',
  synchronize: true,
  logging: false,
  entities: [
    "src/entity/**/*.ts"
  ],
  migrations: [
    "migrations/**/*.ts"
  ],
  cli: {
    entitiesDir: 'src/entity',
    migrationsDir: 'migration',
  },
}
