import "reflect-metadata";
import { ConnectionOptions } from "typeorm";

export let dbMySql: ConnectionOptions = {
  type: "mysql",
  host: "localhost",
  port: 3306,
  username: "root",
  password: "root",
  database: "treinamento",
  entities: ["./entities/*.js"],
  synchronize: true
}

export let dbSqlite: ConnectionOptions = {
  type: "sqlite",
  database: "database.sqlite",
  entities: ["./entities/*.js"],
  synchronize: true,
  logging: false,
};