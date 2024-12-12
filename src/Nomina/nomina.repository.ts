import { InjectRepository } from "@nestjs/typeorm";
import { Empleado } from "./nomina.entity";
import { Repository } from "typeorm";
import { Injectable } from "@nestjs/common";

@Injectable()
export class NominaRepository {
  constructor(
    @InjectRepository(Empleado)
    private readonly nominaRepository: Repository<Empleado>
  ) {}

  async getEmpleados(): Promise<Empleado[]> {
    return await this.nominaRepository.find();
  }

  async createEmpleado(empleado): Promise<Empleado|string> {
    const registroEmpleado = await this.nominaRepository.findOne({where: {DNI: empleado.DNI}});
    if (registroEmpleado) {
        return "Empleado ya registrado";
    }
    return await this.nominaRepository.save(empleado);
  }
}