import { Body, Controller, Get, Post } from "@nestjs/common";
import { NominaService } from "./nomina.service";
import { Empleado } from "./nomina.entity";
import { EmpleadoDTO } from "./Dto/empleado.dto";

@Controller('nomina')
export class NominaController {
  constructor(private readonly NominaService: NominaService) {}
  @Get()
  getEmpleados(): Promise<Empleado[]> {
    return this.NominaService.getEmpleados();
  }

  @Post()
  createEmpleado(@Body() empleado: EmpleadoDTO): Promise<Empleado|string> {
    return this.NominaService.createEmpleado(empleado);
  }
}