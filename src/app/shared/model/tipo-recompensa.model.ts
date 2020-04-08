export interface ITipoRecompensa {
    codigo?: number;
    descricao?: string;
}

export class TipoRecompensa implements ITipoRecompensa {
    constructor(
        public codigo?: number,
        public descricao?: string,
    ) {}
}
