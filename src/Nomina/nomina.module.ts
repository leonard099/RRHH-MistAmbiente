import { Module } from "@nestjs/common";
import { NominaController } from "./nomina.controller";
import { NominaService } from "./nomina.service";
import { Empleado } from "./nomina.entity";
import { TypeOrmModule } from "@nestjs/typeorm";
import { NominaRepository } from "./nomina.repository";
import { Registro } from "src/Registros/registro.entity";

@Module({
    imports: [TypeOrmModule.forFeature([Empleado,Registro])],
    controllers: [NominaController],
    providers: [NominaService, NominaRepository, Empleado],
})
export class NominaModule {}