"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = require("typeorm");
const Candidato_1 = require("../entities/Candidato");
const Concurso_1 = require("../entities/Concurso");
exports.findAll = (req, res) => __awaiter(this, void 0, void 0, function* () {
    let candidatoRepo = typeorm_1.getRepository(Candidato_1.Candidato).find({ relations: ["profissoes"] });
    candidatoRepo.then((result) => {
        res.send(result);
    });
});
exports.findByCPF = (req, res) => __awaiter(this, void 0, void 0, function* () {
    //define how many items do you want to show
    let limit = 10;
    //if pagination will starts with 1 and not 0 keep this line
    let page = (Number(req.params.page) - 1) * limit;
    //else, use this.
    //let page = Number(req.params.page) * limit;
    let candidatos = yield typeorm_1.getRepository(Candidato_1.Candidato).createQueryBuilder("candidato")
        .leftJoinAndSelect("candidato.profissoes", "profissoes")
        .where("candidato.cpf = :cpf", { cpf: req.params.cpf })
        .take(limit).skip(page).getOne();
    //res.status(200).send(candidatos.profissoes);
    let gambs = "";
    for (let i = 0; i < candidatos.profissoes.length; i++) {
        if (i) {
            gambs += " OR ";
        }
        gambs += "vagas.id = " + candidatos.profissoes[i].id;
    }
    console.log(gambs);
    let concursos = typeorm_1.getRepository(Concurso_1.Concurso)
        .createQueryBuilder("concurso")
        .leftJoinAndSelect("concurso.profissoes", "vagas")
        .where(gambs)
        .take(limit).skip(page)
        .getMany();
    concursos.then((result) => {
        res.status(200).send(result);
    });
});
//# sourceMappingURL=candidatoController.js.map