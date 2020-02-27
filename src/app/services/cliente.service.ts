import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {API_URL_V1} from '../app.constants';
import {Cliente, ICLiente} from '../shared/model/cliente.model';
import {Observable} from "rxjs";
import {createRequestOption} from "../shared/util/request-util";
import {map} from "rxjs/operators";

@Injectable({ providedIn: 'root' })
export class ClienteService {

    private NOME_ENTIDADE = 'clientes';

    constructor(
        private http: HttpClient
    ) {}

    // findAll(): Observable<Cliente[]> {
    //     return this.http.get<Cliente[]>(`${API_URL_V1}/${this.NOME_ENTIDADE}`);
    // }

    find(id:number): Observable<Cliente> {
        return this.http.get<Cliente>(`${API_URL_V1}/${this.NOME_ENTIDADE}/${id}`);
    }

    findAll(query?: any): Observable<Cliente[]> {
        const option = createRequestOption(query);
        return this.http.get<Cliente[]>(`${API_URL_V1}/${this.NOME_ENTIDADE}`,  { params: option, observe: 'response' })
            .pipe(map(res => {
                return res.body['content'];
            }));
    }

    create(cliente: ICLiente): Observable<Cliente> {
        return this.http.post<Cliente>(`${API_URL_V1}/${this.NOME_ENTIDADE}`, cliente);
    }

    update(cliente: ICLiente): Observable<Cliente> {
        return this.http.put<Cliente>(`${API_URL_V1}/${this.NOME_ENTIDADE}/${cliente.codigo}`, cliente);
    }

}
