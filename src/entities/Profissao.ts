//construindo a "classe" profissao

import {Entity, Column,  PrimaryGeneratedColumn} from "typeorm";

@Entity("profissao")
export class Profissao {

    //campo de chave primaria: id
    @PrimaryGeneratedColumn()
    id: number;

    //varchar(255) nome
    @Column()
    nome: string;

}
