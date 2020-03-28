import {Observable} from 'rxjs';
import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {API_URL_V1} from '../app.constants';
// @ts-ignore
import {EmpresaService} from "./empresa.service";
import {IMovimentacaoEstoqueCliente, MovimentacaoEstoqueCliente} from "../shared/model/MovimentacaoEstoque.model";

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

}
