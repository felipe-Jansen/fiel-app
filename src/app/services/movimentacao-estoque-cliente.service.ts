import {Observable} from 'rxjs';
import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {API_URL_V1} from '../app.constants';
// @ts-ignore
import {EmpresaService} from "./empresa.service";
import {IMovimentacaoEstoqueCliente, MovimentacaoEstoqueCliente} from "../shared/model/movimentacaoEstoque.modelCliente";
import {Ponto} from "../shared/model/ponto.model";
import {createRequestOption} from "../shared/util/request-util";
import {map} from "rxjs/operators";

@Injectable({ providedIn: 'root' })
export class MovimentacaoEstoqueClienteService {

    private NOME_ENTIDADE = 'movimentacoes_estoque_cliente';

    constructor(
        protected http: HttpClient,
        private empresaService: EmpresaService
    ) {}

    create(movimentacaoEstoque?: IMovimentacaoEstoqueCliente): Observable<MovimentacaoEstoqueCliente> {
        return this.http.post<MovimentacaoEstoqueCliente>(`${API_URL_V1}/${this.NOME_ENTIDADE}`,  movimentacaoEstoque);
    }

    public getAll(query?: any): Observable<Ponto[]> {
        const option = createRequestOption(query);
        return this.http.get<MovimentacaoEstoqueCliente[]>(`${API_URL_V1}/${this.NOME_ENTIDADE}`,  { params: option, observe: 'response' })
            .pipe(map(res => {
                return res.body['content'];
            }));
    }

}
