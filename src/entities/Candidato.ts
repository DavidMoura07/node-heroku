//construindo a "classe" candidato

import {Entity, Column,  PrimaryGeneratedColumn, ManyToMany, JoinTable} from "typeorm";
import { Profissao } from "./Profissao";


@Entity("candidato")
export class Candidato {

    //campo de chave primaria: id
    @PrimaryGeneratedColumn()
    id: number;

    //varchar(255) nome
    @Column()
    nome: string;

    //varchar(14) cpf
    @Column()
    cpf: string;

    //Date nascimento
    @Column()
    dataNascimento: string;

    @ManyToMany(type => Profissao)
    @JoinTable()
    profissoes : Profissao[];




}