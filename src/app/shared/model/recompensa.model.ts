export const enum TipoRecompensa {
    SERVICO = 'SERVICO',
    PRODUTO = 'PRODUTO'
}

export interface IRecompensa {
    codigo?: number;
    totalPontos?: number;
    dataCadastro?: any;
    qtdEstoque?: number;
    idEmpresa?: number;
    tipoRecompensa?: TipoRecompensa;
    descricao?: string
}

export class Recompensa implements IRecompensa {
    constructor(
        public codigo?: number,
        public totalPontos?: number,
        public dataCadastro?: any,
        public qtdEstoque?: number,
        public idEmpresa?: number,
        public tipoRecompensa?: TipoRecompensa,
        public descricao?: string
    ) {}
}
