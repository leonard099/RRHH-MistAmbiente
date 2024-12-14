import { IsBoolean, IsDate, IsEnum, IsNumber } from "class-validator";

export class RegistroDto {
    @IsNumber()
    DNI: number;

    @IsEnum(['presente', 'ausente'])
    estado: string;

    @IsEnum(['Maternidad', 'Medico', 'Vacaciones', 'Incapacidad', 'Permiso', 'Otro', null])
    razon: string;

    @IsBoolean()
    justificado: boolean;
}
