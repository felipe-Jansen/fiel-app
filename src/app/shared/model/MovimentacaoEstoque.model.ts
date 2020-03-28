export interface IMovimentacaoEstoqueCliente {
    codigo?: number;
    dataMovimentacao?: any;
    quantidade?: number;
    idCliente?: number;
    tipoMovimentacao?: any;
    idRecompensa?: any;
    nomeRecompensa?: string;
    estoqueRecompensa?: number;
    pontosRecompensa?: number;
}

export class MovimentacaoEstoqueCliente implements IMovimentacaoEstoqueCliente {
    constructor(
        public codigo?: number,
    public  dataMovimentacao?: any,
    public   quantidade?: number,
    public  idCliente?: number,
    public  idRecompensa?: any,
    public  tipoMovimentacao?: any,
    public  nomeRecompensa?: string,
    public estoqueRecompensa?: number,
    public pontosRecompensa?: number,
    ) {}
}
