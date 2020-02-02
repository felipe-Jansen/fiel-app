export interface ITipoRecompensa {
    codigo?: number;
    descricao?: number;
}

export class TipoRecompensa implements ITipoRecompensa {
    constructor(
        public codigo?: number,
        public descricao?: number,
    ) {}
}
