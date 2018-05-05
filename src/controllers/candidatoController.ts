import { Request, Response } from "express";
import { getRepository } from "typeorm";
import { Candidato } from "../entities/Candidato";
import { Concurso } from "../entities/Concurso";
import { Profissao } from "../entities/Profissao";

export let findAll = async (req: Request, res: Response) => {
    let candidatoRepo = getRepository(Candidato).find({ relations: ["profissoes"] });
    candidatoRepo.then((result: any) => {
        res.send(result);
    })
}

export let findByCPF = async (req: Request, res: Response) => {

    //define how many items do you want to show
    let limit = 10;
    //if pagination will starts with 1 and not 0 keep this line
    let page = (Number(req.params.page) - 1) * limit;
    //else, use this.
    //let page = Number(req.params.page) * limit;

    let candidatos = await getRepository(Candidato).createQueryBuilder("candidato")
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

    let concursos = getRepository(Concurso)
        .createQueryBuilder("concurso")
        .leftJoinAndSelect("concurso.profissoes", "vagas")
        .where(gambs)
        .take(limit).skip(page)
        .getMany();

    concursos.then((result: any) => {
        res.status(200).send(result);
    })
}



