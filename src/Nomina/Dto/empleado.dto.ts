import { IsNumber, IsString } from "class-validator";

export class EmpleadoDTO {
    @IsNumber()
    DNI: number;

    @IsString()
    Nombre: string;

    @IsString()
    Apellido: string;

    @IsString()
    Area: string;

    @IsString()
    Categoria: string;
}