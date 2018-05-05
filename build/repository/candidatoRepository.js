"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = require("typeorm");
const Candidato_1 = require("../entities/Candidato");
class CandidatoRepo {
    findAll() {
        return typeorm_1.getManager().getRepository(Candidato_1.Candidato).find();
    }
}
exports.CandidatoRepo = CandidatoRepo;
//# sourceMappingURL=candidatoRepository.js.map