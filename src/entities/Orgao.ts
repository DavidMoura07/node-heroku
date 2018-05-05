import {Entity, PrimaryGeneratedColumn, Column, OneToMany} from "typeorm";
import {Concurso} from "./Concurso"

@Entity()
export class Orgao {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    nome: string;

    @OneToMany(type => Concurso, concurso => concurso.orgao)
    concursos: Concurso[];
}