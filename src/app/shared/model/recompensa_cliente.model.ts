export interface IRecompensaCliente {
    codigo?: number;
    idRecompensa?: number;
    idCliente?: any;
    quantidade?: number;
    recompensaPontos?: number;
    descricao?: string;
    ativo?: boolean;
    totalEstoqueCliente?: number;
}

export class RecompensaCliente implements IRecompensaCliente {
    constructor(
        public codigo?: number,
        public idRecompensa?: number,
        public idCliente?: any,
        public quantidade?: number,
        public recompensaPontos?: number,
        public descricao?: string,
        public ativo?: boolean,
        public totalEstoqueCliente?: number
    ) {}
}
