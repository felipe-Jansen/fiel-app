export interface IPonto {
    codigo?: number;
    pontoAtivo?: boolean;
    valorCompra?: number;
    totalPontos?: number;
    dataCompra?: any;
    idCliente?: any;
    idEmpresa?: any;
    idRecompensa?: any;
    descricao?: string;
    clienteNome?: string;
}

export class Ponto implements IPonto {
    constructor(
        public codigo?: number,
        public valorCompra?: number,
        public totalPontos?: number,
        public pontoAtivo?: boolean,
        public dataCompra?: any,
        public idEmpresa?: number,
        public idCliente?: number,
        public idRecompensa?: number,
        public descricao?: string,
        public clienteNome?: string
    ) {}
}
