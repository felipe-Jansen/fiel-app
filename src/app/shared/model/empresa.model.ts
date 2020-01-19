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
    email?: string;
    telefone?: string;
    whatsapp?: string;
    idUser?: number;
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
        public email?: string,
        public telefone?: string,
        public whatsapp?: string,
        public idUser?: number
    ) {

    }
}
