import { Module } from "@nestjs/common";
import { RegistroController } from "./registro.controller";
import { RegistroService } from "./registro.service";
import { RegistroRepository } from "./registro.repository";
import { Registro } from "./registro.entity";
import { Empleado } from "src/Nomina/nomina.entity";
import { TypeOrmModule } from "@nestjs/typeorm";

@Module({
    imports: [TypeOrmModule.forFeature([Registro,Empleado])],
    controllers: [RegistroController],
    providers: [RegistroService, RegistroRepository],
})
export class RegistroModule {}