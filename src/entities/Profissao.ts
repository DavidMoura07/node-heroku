import {Entity, PrimaryGeneratedColumn, Column} from "typeorm";

@Entity()
export class Profissao {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    nome: string;

}