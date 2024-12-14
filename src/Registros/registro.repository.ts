import { BadRequestException, Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Registro } from "./registro.entity";
import { Between, LessThanOrEqual, MoreThanOrEqual, Repository } from "typeorm";
import { Empleado } from "src/Nomina/nomina.entity";

@Injectable()
export class RegistroRepository {
    constructor(
        @InjectRepository(Registro)
        private readonly registroRepository: Repository<Registro>,
        @InjectRepository(Empleado)
        private readonly empleadoRepository: Repository<Empleado>
    ) {}
    // Para el get la fecha de desde debe entrar desde las 00:00:00 y la fecha de hasta debe entrar hasta las 23:59:59
    async getRegistros(registros): Promise<Registro[]> {
        const empleado = await this.empleadoRepository.findOne({where: {DNI: registros.empleado}});
        const datos = await this.registroRepository.find({where: {empleado: empleado, fecha: Between(registros.desde,registros.hasta)},relations: ["empleado"]});
        if (datos.length === 0) {
            throw new BadRequestException("No hay registros para este empleado en este rango de fechas");
        }
        return datos;
    }
   
    async createRegistro(registro): Promise<Registro|string> {
        const empleado = await this.empleadoRepository.findOne({where: {DNI: registro.DNI}});
        if (!empleado) {
            return "Empleado no encontrado";
        }
        registro.empleado = empleado;
        if(registro.estado === "presente") {
            registro.justificado = null;
            registro.razon = null;
        }
        if(registro.estado === "ausente") {
            if (registro.justificado == null||!registro.razon) {
                throw new BadRequestException("Faltan datos") ;
            }
        }
        const registroExistente = await this.registroRepository.find({where: {empleado: empleado}});
        if (registroExistente.length !== 0) {
            const fecha = new Date();
            for (let i = 0; i < registroExistente.length; i++) {
                if (registroExistente[i].fecha.toISOString().split("T")[0] === new Date(fecha).toISOString().split("T")[0]) {
                    throw new BadRequestException("Ya existe un registro para este empleado en esta fecha");
                }
            }
        }
        
        return await this.registroRepository.save(registro);
    }
}