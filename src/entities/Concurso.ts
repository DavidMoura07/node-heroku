//construindo a "classe" concurso
import {Entity, Column,  PrimaryGeneratedColumn, ManyToMany, ManyToOne, JoinTable } from "typeorm";
import { Orgao } from "./Orgao";
import { Profissao } from "./Profissao";


@Entity("concurso")
export class Concurso {

    //campo de chave primaria: id
    @PrimaryGeneratedColumn()
    id: number;

    //codigo do concurso
    @Column()
    codigo: number;

    //edital
    @Column()
    edital: string;

    @ManyToOne( type => Orgao, orgao => orgao.concursos )
    orgao: Orgao;

    @ManyToMany(type => Profissao)
    @JoinTable()
    profissoes : Profissao[];

}
