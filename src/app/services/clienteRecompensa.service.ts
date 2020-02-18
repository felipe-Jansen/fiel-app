import {Observable} from 'rxjs';
import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {API_URL_V1} from '../app.constants';
import {RecompensaCliente} from "../shared/model/recompensa_cliente.model";
import {Recompensa} from "../shared/model/recompensa.model";
import {createRequestOption} from "../shared/util/request-util";
import {map} from "rxjs/operators";

@Injectable({ providedIn: 'root' })
export class ClienteRecompensaService {

    private NOME_ENTIDADE = 'recompensa_clientes';

    constructor(protected http: HttpClient) {}

    public find(id: number): Observable<RecompensaCliente> {
        return this.http.get<RecompensaCliente>(`${API_URL_V1}/${this.NOME_ENTIDADE}/${id}`);
    }

    public create(recompensaCliente: RecompensaCliente): Promise<RecompensaCliente> {
        return this.http.post<RecompensaCliente>(`${API_URL_V1}/${this.NOME_ENTIDADE}`, recompensaCliente)
            .toPromise()
            .then(res => {
                return res;
            });
    }

    getAll(query?: any): Observable<RecompensaCliente[]> {
        const option = createRequestOption(query);
        return this.http.get<RecompensaCliente[]>(`${API_URL_V1}/${this.NOME_ENTIDADE}`,  { params: option, observe: 'response' })
            .pipe(map(res => {
                return res.body['content'];
            }));
    }

    update(recompensaCliente: RecompensaCliente) {
        return this.http.put<RecompensaCliente>(`${API_URL_V1}/${this.NOME_ENTIDADE}/${recompensaCliente.codigo}`,  recompensaCliente)
            .pipe(map(res => {
                return res;
            }));
    }
}
