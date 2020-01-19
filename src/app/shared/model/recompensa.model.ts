export interface IRecompensa {
    codigo?: number;
    totalPontos?: number;
    dataCadastro?: any;
    qtdEstoque?: number;
    idEmpresa?: number;
    idTipoRecompensa?: number;
    descricao?: string
}

export class Recompensa implements IRecompensa {
    constructor(
        public codigo?: number,
        public totalPontos?: number,
        public dataCadastro?: any,
        public qtdEstoque?: number,
        public idEmpresa?: number,
        public idTipoRecompensa?: number,
        public descricao?: string
    ) {}
}
