export interface ISuporte {
    codigo?: number;
    email?: string;
    telefone?: string;
    descricao?: string;
}

export class Suporte implements ISuporte {
    constructor(
        public codigo?: number,
        public email?: string,
        public telefone?: string,
        public descricao?: string
    ) {}
}
