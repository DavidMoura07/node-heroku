"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
exports.dbMySql = {
    type: "mysql",
    host: "den1.mysql6.gear.host",
    port: 3306,
    username: "type",
    password: "Km4bqF3d-L_j",
    database: "type",
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