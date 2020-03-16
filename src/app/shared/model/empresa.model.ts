export interface IEmpresa {
    codigo?: number;
    razaoSocial?: string;
    cnpj?: string;
    cpf?: string;
    nome?: string;
    sobrenome?: string;
    latitude?: string;
    longitude?: string;
    cep?: string;
    rua?: string;
    bairro?: string;
    cidade?: string;
    estado?: string;
    dataCadastro?: any;
    dataNascimento?: any;
    telefone?: string;
    complemento?: string;
    pontoReferencia?: string;
    whatsapp?: string;
    idUser?: number;
    numero?: number;
    email?: string;
    senha?: string;
    foto?: any;
    foto_url?: string;
}

export class Empresa implements IEmpresa {
    constructor(
        public codigo?: number,
        public razaoSocial?: string,
        public cnpj?: string,
        public  cpf?: string,
        public nome?: string,
        public  sobrenome?: string,
        public latitude?: string,
        public longitude?: string,
        public  cep?: string,
        public  rua?: string,
        public  bairro?: string,
        public   cidade?: string,
        public estado?: string,
        public  dataCadastro?: any,
        public dataNascimento?: any,
        public telefone?: string,
        public  complemento?: string,
        public pontoReferencia?: string,
        public numero?: number,
        public  whatsapp?: string,
        public  idUser?: number,
        public email?: string,
        public senha?: string,
        public foto?: any,
        public foto_url?: string) {

    }
}
