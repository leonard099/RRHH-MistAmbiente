import { Column, Entity, PrimaryColumn } from "typeorm";

@Entity()
export class Empleado {
    @PrimaryColumn()
    DNI: number;

    @Column()
    Nombre: string;

    @Column()
    Apellido: string;

    @Column()
    Area: string;

    @Column()
    Categoria: string;
}