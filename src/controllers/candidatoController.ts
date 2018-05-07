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

export let findOne = async (req: Request, res: Response) => {
    let candidato = await getRepository(Candidato).createQueryBuilder("candidato")
    .where("candidato.cpf = :cpf", { cpf: req.params.cpf })
    .getOne();

    if(candidato){
        res.status(200).send(candidato);
    }else{
        res.status(404).send({message: "Candidato não encontrado!"});
    }
}

export let findByCPF = async (req: Request, res: Response) => {

    let limit = 10;
    let page = (Number(req.params.page) - 1) * limit;

    let candidatos = await getRepository(Candidato).createQueryBuilder("candidato")
        .leftJoinAndSelect("candidato.profissoes", "profissoes")
        .where("candidato.cpf = :cpf", { cpf: req.params.cpf })
        .getOne();
    if(candidatos){
        let whereStr = "";
        for (let i = 0; i < candidatos.profissoes.length; i++) {
            if (i) {
                whereStr += " OR ";
            }
            whereStr += "vagas.id = " + candidatos.profissoes[i].id;
        }
        //console.log(gambs);

        let concursos = getRepository(Concurso)
            .createQueryBuilder("concurso")
            .leftJoinAndSelect("concurso.orgao", "orgao")
            .leftJoinAndSelect("concurso.profissoes", "vagas")
            .where(whereStr)
            .take(limit).skip(page)
            .getMany();

        concursos.then((result: any) => {
            res.status(200).send(result);
        })
    }
    else{
        res.status(404).send({message: "Candidato não encontrado!"});
    }
    
}



