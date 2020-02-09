export interface IRecompensaCliente {
    codigo?: number;
    idRecompensa?: number;
    idCliente?: any;
    quantidade?: number;
}

export class RecompensaCliente implements IRecompensaCliente {
    constructor(
        public codigo?: number,
        public idRecompensa?: number,
        public idCliente?: any,
        public quantidade?: number
    ) {}
}
