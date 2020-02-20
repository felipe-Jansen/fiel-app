import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Empresa} from '../shared/model/empresa.model';
import {API_URL_V1} from '../app.constants';
import {Cliente} from '../shared/model/cliente.model';
// @ts-ignore
import moment from "moment";
import {Observable} from "rxjs";
import {User} from "../shared/model/user.model";

@Injectable({ providedIn: 'root' })
export class EmpresaService {

    private NOME_ENTIDADE = 'empresas';

    constructor(protected http: HttpClient) {}

    getAll(): Promise<Empresa[]> {
        return this.http.get<Empresa[]>(`${API_URL_V1}/${this.NOME_ENTIDADE}`)
            .toPromise()
            .then(empresas => {
               return empresas;
            });
    }

    getEmpresaLogada(): Promise<Empresa> {
        return this.http.get<Empresa>(`${API_URL_V1}/${this.NOME_ENTIDADE}/empresa_logada`)
            .toPromise()
            .then(empresa => {
                return empresa;
            });
    }

    getReceitaTotal(): Promise<number> {
        return this.http.get<number>(`${API_URL_V1}/${this.NOME_ENTIDADE}/receita_empresa_logada`)
            .toPromise()
            .then(receita => {
                return receita;
            });
    }

    getTotalClientes(): Promise<number> {
        return this.http.get<number>(`${API_URL_V1}/${this.NOME_ENTIDADE}/total_clientes_empresa_logada`)
            .toPromise()
            .then(res => {
                return res;
            });
    }

    put(empresa: Empresa): Promise<Empresa> {
        empresa.dataCadastro = moment(new Date(empresa.dataCadastro[0], empresa.dataCadastro[1] - 1, empresa.dataCadastro[2])).format('YYYY-MM-DD');
        console.log(empresa);
        return this.http.put<Empresa>(`${API_URL_V1}/${this.NOME_ENTIDADE}/${empresa.codigo}`, empresa)
            .toPromise()
            .then(res => {
                return res;
            });
    }

    save(empresaDTO: Empresa): Observable<Empresa> {
        let user = new User(empresaDTO.email, empresaDTO.senha);
        console.log(empresaDTO);
        return this.http.post<Empresa>(`${API_URL_V1}/${this.NOME_ENTIDADE}`, {empresaDTO, user});
    }

}
