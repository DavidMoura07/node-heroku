import "reflect-metadata";
import { ConnectionOptions } from "typeorm";

export let dbMySql: ConnectionOptions = {
  type: "mysql",
  host: "den1.mysql6.gear.host",
  port: 3306,
  username: "type",
  password: "Km4bqF3d-L_j",
  database: "type",
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