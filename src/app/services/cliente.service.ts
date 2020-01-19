import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {API_URL_V1} from '../app.constants';
import {Cliente} from '../shared/model/cliente.model';
import {Observable} from "rxjs";

@Injectable({ providedIn: 'root' })
export class ClienteService {

    private NOME_ENTIDADE = 'clientes';

    constructor(
        private http: HttpClient
    ) {}

    findAll(): Observable<Cliente[]> {
        return this.http.get<Cliente[]>(`${API_URL_V1}/${this.NOME_ENTIDADE}`);
    }

    find(id:number): Observable<Cliente> {
        return this.http.get<Cliente>(`${API_URL_V1}/${this.NOME_ENTIDADE}/${id}`);
    }

    findAllByEmpresa(): Observable<Cliente[]> {
        return this.http.get<Cliente[]>(`${API_URL_V1}/${this.NOME_ENTIDADE}/clientes_da_empresa`);
    }

}
