import {Entity, PrimaryGeneratedColumn, Column, ManyToMany, JoinTable} from "typeorm";
import { Profissao } from "./Profissao";

@Entity()
export class Candidato {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    nome: string;

    @Column()
    cpf: string;

    @Column()
    dataNascimento: string;

    @ManyToMany(type => Profissao)
    @JoinTable()
    profissoes: Profissao[];

}