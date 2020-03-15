export interface IUser {
    codigo?: number
    email?: string;
    senha?: string;
    perfis?: any;
    codigo_recuperacao?: string
}

export class User implements IUser {
    constructor(
        public codigo?: number,
        public email?: string,
        public senha?: string,
        public perfis?: any,
        public codigo_recuperacao?: string
    ) {}
}
