export const enum TipoFinanceiro {
    RECEITA = 'RECEITA',
    DESPESA = 'DESPESA'
}

export const enum StatusFinanceiro {
    PAGO = 'PAGO',
    NAO_PAGO = 'NAO_PAGO'
}

export interface IFinanceiro {
    codigo?: number;
    valor?: number;
    dataCadastro?: any;
    dataPagamento?: any;
    descricao?: any;
    tipo?: TipoFinanceiro;
    status?: StatusFinanceiro;
    idEmpresa?: number;
}

export class Financeiro implements IFinanceiro {
    constructor(
        public codigo?: number,
        public valor?: number,
        public dataCadastro?: any,
        public dataPagamento?: any,
        public descricao?: string,
        public tipo?: TipoFinanceiro,
        public status?: StatusFinanceiro,
        public idEmpresa?: number
    ) {}
}
