"use strict";
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
//construindo a "classe" concurso
const typeorm_1 = require("typeorm");
const Orgao_1 = require("./Orgao");
const Profissao_1 = require("./Profissao");
let Concurso = class Concurso {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], Concurso.prototype, "id", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Number)
], Concurso.prototype, "codigo", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Concurso.prototype, "edital", void 0);
__decorate([
    typeorm_1.ManyToOne(type => Orgao_1.Orgao, orgao => orgao.concursos),
    __metadata("design:type", Orgao_1.Orgao)
], Concurso.prototype, "orgao", void 0);
__decorate([
    typeorm_1.ManyToMany(type => Profissao_1.Profissao),
    typeorm_1.JoinTable(),
    __metadata("design:type", Array)
], Concurso.prototype, "profissoes", void 0);
Concurso = __decorate([
    typeorm_1.Entity("concurso")
], Concurso);
exports.Concurso = Concurso;
//# sourceMappingURL=Concurso.js.map