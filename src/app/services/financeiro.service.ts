import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Empresa} from '../shared/model/empresa.model';
import {API_URL_V1} from '../app.constants';
// @ts-ignore
import {Observable} from "rxjs";
import {User} from "../shared/model/user.model";
import {Financeiro} from "../shared/model/financeiro.model";
import * as moment from 'moment';
import {EmpresaService} from "./empresa.service";
import {Cliente} from "../shared/model/cliente.model";
import {createRequestOption} from "../shared/util/request-util";
import {map} from "rxjs/operators";

@Injectable({ providedIn: 'root' })
export class FinanceiroService {

    private NOME_ENTIDADE = 'financeiro';

    constructor(
        protected http: HttpClient,
        protected empresaService: EmpresaService
    ) {}

    findAll(query?: any): Observable<Cliente[]> {
        const option = createRequestOption(query);
        return this.http.get<Financeiro[]>(`${API_URL_V1}/${this.NOME_ENTIDADE}`,  { params: option, observe: 'response' })
            .pipe(map(res => {
                return res.body ? res.body['content'] : [];
            }));
    }

    find(id:number): Observable<Financeiro> {
        return this.http.get<Financeiro>(`${API_URL_V1}/${this.NOME_ENTIDADE}/${id}`);
    }

    save(financeiro: Financeiro): Observable<Financeiro> {
        financeiro.dataPagamento = financeiro.dataPagamento ? moment(financeiro.dataPagamento).format('YYYY-MM-DD') : null;
        return this.http.post<Financeiro>(`${API_URL_V1}/${this.NOME_ENTIDADE}`, financeiro);
    }

    update(financeiro: Financeiro) {
        return this.http.put<Financeiro>(`${API_URL_V1}/${this.NOME_ENTIDADE}/${financeiro.codigo}`, financeiro);
    }
}
