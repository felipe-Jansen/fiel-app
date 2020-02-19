export interface IEmpresa {
    codigo?: number;
    razaoSocial?: string;
    cnpj?: string;
    latitude?: string;
    longitude?: string;
    cep?: string;
    rua?: string;
    bairro?: string;
    cidade?: string;
    estado?: string;
    dataCadastro?: any;
    telefone?: string;
    whatsapp?: string;
    idUser?: number;

    email?: string;
    senha?: string;
}

export class Empresa implements IEmpresa {
    constructor(
        public codigo?: number,
        public razaoSocial?: string,
        public cnpj?: string,
        public cep?: string,
        public rua?: string,
        public latitude?: string,
        public longitude?: string,
        public bairro?: string,
        public cidade?: string,
        public estado?: string,
        public dataCadastro?: any,
        public telefone?: string,
        public whatsapp?: string,
        public idUser?: number,

        public email?: string,
        public senha?: string,
    ) {

    }
}
