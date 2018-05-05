"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
exports.dbMySql = {
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "root",
    database: "treinamento",
    entities: ["./entities/*.js"],
    synchronize: true
};
exports.dbSqlite = {
    type: "sqlite",
    database: "database.sqlite",
    entities: ["./entities/*.js"],
    synchronize: true,
    logging: false,
};
//# sourceMappingURL=app-config.js.map