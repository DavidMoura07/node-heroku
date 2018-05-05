import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, ManyToMany, JoinTable } from "typeorm";
import { Orgao } from "./Orgao";
import { Profissao } from "./Profissao";

@Entity()
export class Concurso {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    edital: string;

    @Column()
    codigo: number;

    @ManyToOne(type => Orgao, orgao => orgao.concursos)
    orgao: Orgao;

    @ManyToMany(type => Profissao)
    @JoinTable()
    profissoes: Profissao[];
}