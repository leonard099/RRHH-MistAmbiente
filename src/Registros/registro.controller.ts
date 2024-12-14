import { Body, Controller, Get, Post, Query } from "@nestjs/common";
import { RegistroService } from "./registro.service";
import { RegistroDto } from "./Dto/registro.Dto";

@Controller('registro')
export class RegistroController {
    constructor(private registroService: RegistroService) {}
    @Post()
    createRegistro(@Body() registro:RegistroDto) {
        return this.registroService.createRegistro(registro);
    }

    @Get()
    getRegistros(@Query('empleado')  empleado: number, @Query('desde') desde: number, @Query('hasta') hasta: number) {
        const registros = {empleado, desde, hasta};
        console.log(registros)
        return this.registroService.getRegistros(registros);
    }
}