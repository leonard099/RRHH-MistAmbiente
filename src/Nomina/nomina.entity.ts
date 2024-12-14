import { Registro } from "src/Registros/registro.entity";
import { Column, Entity, OneToMany, PrimaryColumn } from "typeorm";

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

    @OneToMany(() => Registro, registro => registro.empleado)
    registros: Registro[];
}