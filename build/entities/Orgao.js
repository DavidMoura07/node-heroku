"use strict";
//construindo a "classe" orgao
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = require("typeorm");
const Concurso_1 = require("./Concurso");
let Orgao = class Orgao {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], Orgao.prototype, "id", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Orgao.prototype, "nome", void 0);
__decorate([
    typeorm_1.OneToMany(type => Concurso_1.Concurso, concurso => concurso.orgao),
    __metadata("design:type", Array)
], Orgao.prototype, "concursos", void 0);
Orgao = __decorate([
    typeorm_1.Entity("orgao")
], Orgao);
exports.Orgao = Orgao;
//# sourceMappingURL=Orgao.js.map