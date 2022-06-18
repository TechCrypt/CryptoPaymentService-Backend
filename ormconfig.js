module.exports = {
  name: "default",
  type: "postgres",
  host: process.env.DATABASE_HOST || "localhost",
  port: process.env.DATABASE_PORT || 5432,
  username: process.env.DATABASE_USERNAME || "yera",
  password: process.env.DATABASE_PASSWORD || "postgres",
  database: process.env.DATABASE_NAME || "d",
  entities: ["dist/**/*.entity{ .ts,.js}"],
  migrations: ["dist/migrations/*{.ts,.js}"],
  synchronize: false,
  migrationsTableName: "migrations_typeorm",
  migrationsRun: true,
  bigNumberStrings: false,
  cli: {
    migrationsDir: "src/migrations",
  }
}