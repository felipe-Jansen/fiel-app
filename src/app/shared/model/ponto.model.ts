export interface IPonto {
    codigo?: number;
    pontoAtivo?: boolean;
    valorCompra?: number;
    dataCompra?: any;
    idCliente?: any;
    idEmpresa?: any;
    idRecompensa?: any;
}

export class Ponto implements IPonto {
    constructor(
        public codigo?: number,
        public valorCompra?: number,
        public pontoAtivo?: boolean,
        public dataCompra?: any,
        public idEmpresa?: number,
        public idCliente?: number,
        public idRecompensa?: number
    ) {}
}
