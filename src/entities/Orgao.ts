//construindo a "classe" orgao

import {Entity, Column,  PrimaryGeneratedColumn, OneToMany } from "typeorm";
import { Concurso } from  "./Concurso";

@Entity("orgao")
export class Orgao {

    //campo de chave primaria: id
    @PrimaryGeneratedColumn()
    id: number;

    //varchar(255) nome
    @Column()
    nome: string;

    @OneToMany(type => Concurso, concurso => concurso.orgao)
    concursos: Concurso[];

}