"use strict";
//construindo a "classe" candidato
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
const Profissao_1 = require("./Profissao");
let Candidato = class Candidato {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], Candidato.prototype, "id", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Candidato.prototype, "nome", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Candidato.prototype, "cpf", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Candidato.prototype, "dataNascimento", void 0);
__decorate([
    typeorm_1.ManyToMany(type => Profissao_1.Profissao),
    typeorm_1.JoinTable(),
    __metadata("design:type", Array)
], Candidato.prototype, "profissoes", void 0);
Candidato = __decorate([
    typeorm_1.Entity("candidato")
], Candidato);
exports.Candidato = Candidato;
//# sourceMappingURL=Candidato.js.map