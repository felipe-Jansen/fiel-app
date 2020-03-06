export interface IRecompensaCliente {
    codigo?: number;
    idRecompensa?: number;
    idCliente?: any;
    quantidade?: number;
    recompensaPontos?: number;
    recompensaDescricao?: string;
    ativo?: boolean;
    totalEstoque?: number;
}

export class RecompensaCliente implements IRecompensaCliente {
    constructor(
        public codigo?: number,
        public idRecompensa?: number,
        public idCliente?: any,
        public quantidade?: number,
        public recompensaPontos?: number,
        public recompensaDescricao?: string,
        public ativo?: boolean,
        public totalEstoque?: number
    ) {}
}
