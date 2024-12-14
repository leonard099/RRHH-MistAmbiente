import { Injectable } from "@nestjs/common";
import { RegistroRepository } from "./registro.repository";

@Injectable()
export class RegistroService {
    constructor(
        private readonly registroRepository:RegistroRepository) {}
    createRegistro(registro) {
        return this.registroRepository.createRegistro(registro);
    }

    getRegistros(registros) {
        return this.registroRepository.getRegistros(registros);
    }
}
