import { Request, Response } from "express";
import { getRepository } from "typeorm";
import { Candidato } from "../entities/Candidato";
import { Concurso } from "../entities/Concurso";
import { Profissao } from "../entities/Profissao";


export let findByCod = async (req: Request, res: Response) => {

    //define how many items do you want to show
    let limit = 10;
    //if pagination will starts with 1 and not 0 keep this line
    let page = (Number(req.params.page) - 1) * limit;
    //else, use this.
    //let page = Number(req.params.page) * limit;

    let concursos = await getRepository(Concurso).createQueryBuilder("concurso")
        .leftJoinAndSelect("concurso.profissoes", "vagas")
        .where("concurso.codigo = :cod", { cod: req.params.cod })
        .take(limit).skip(page).getOne();

    //res.status(200).send(concursos);


    let whereStr = "";
    for (let i = 0; i < concursos.profissoes.length; i++) {
        if (i) {
            whereStr += " OR ";
        }
        whereStr += "profissoes.id = " + concursos.profissoes[i].id;
    }
    //console.log(whereStr);

    let candidatos = getRepository(Candidato)
        .createQueryBuilder("candidato")
        .leftJoinAndSelect("candidato.profissoes", "profissoes")
        .where(whereStr)
        .take(limit).skip(page)
        .getMany();

    candidatos.then((result: any) => {
        res.status(200).send(result);
    })
}