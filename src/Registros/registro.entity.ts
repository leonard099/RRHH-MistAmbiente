import { UUID } from "crypto";
import { Empleado } from "src/Nomina/nomina.entity";
import { Column, CreateDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Registro{
    @PrimaryGeneratedColumn()
    id: UUID;

    @CreateDateColumn()
    fecha: Date;

    @Column({type: "varchar", length: 255, nullable: false})
    estado: string;

    @Column({type: "varchar", length: 255, nullable: true})
    razon: string;

    @Column({type: "boolean",nullable: true})
    justificado: boolean;

    @ManyToOne(() => Empleado, empleado => empleado.registros)
    empleado: Empleado;
}