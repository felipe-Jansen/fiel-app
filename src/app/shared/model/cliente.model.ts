export interface ICLiente {
    codigo?: number;
    nome?: string;
    sobrenome?: string;
    cpf?: string;
    cep?: string;
    rua?: string;
    bairro?: string;
    cidade?: string;
    estado?: string;
    dataCadastro?: any;
    dataNascimento?: any;
    email?: string;
    whatsapp?: string;
}

export class Cliente implements ICLiente {
    constructor(
        public codigo?: number,
        public nome?: string,
        public sobrenome?: string,
        public cpf?: string,
        public cep?: string,
        public rua?: string,
        public bairro?: string,
        public cidade?: string,
        public estado?: string,
        public dataCadastro?: any,
        public dataNascimento?: any,
        public email?: string,
        public whatsapp?: string,
    ) {

    }
}
