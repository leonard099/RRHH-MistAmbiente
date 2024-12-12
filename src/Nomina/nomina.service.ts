import { Injectable } from "@nestjs/common";
import { NominaRepository } from "./nomina.repository";
import { Empleado } from "./nomina.entity";

@Injectable()
export class NominaService {
  constructor(
    private readonly nominaRepository: NominaRepository
  ) {}

  getEmpleados(): Promise<Empleado[]> {
    return this.nominaRepository.getEmpleados();
  }

  createEmpleado(empleado): Promise<Empleado|string> {
    return this.nominaRepository.createEmpleado(empleado);
  }
}