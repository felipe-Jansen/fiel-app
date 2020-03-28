export interface IMovimentacaoEstoqueCliente {
    codigo?: number;
    dataMovimentacao?: boolean;
    quantidade?: number;
    idCliente?: number;
    idRecompensa?: any;
    tipoMovimentacao?: any;
}

export class MovimentacaoEstoqueCliente implements IMovimentacaoEstoqueCliente {
    constructor(
        public codigo?: number,
    public  dataMovimentacao?: boolean,
    public   quantidade?: number,
    public  idCliente?: number,
    public  idRecompensa?: any,
    public  tipoMovimentacao?: any
    ) {}
}
