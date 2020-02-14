import {Observable} from 'rxjs';
import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {API_URL_V1} from '../app.constants';
import {RecompensaCliente} from "../shared/model/recompensa_cliente.model";

@Injectable({ providedIn: 'root' })
export class ClienteRecompensaService {

    private NOME_ENTIDADE = 'recompensa_clientes';

    constructor(protected http: HttpClient) {}

    public find(id: number): Observable<RecompensaCliente> {
        return this.http.get<RecompensaCliente>(`${API_URL_V1}/${this.NOME_ENTIDADE}/${id}`);
    }

    public create(recompensaCliente: RecompensaCliente): Observable<RecompensaCliente> {
        return this.http.post<RecompensaCliente>(`${API_URL_V1}/${this.NOME_ENTIDADE}`, recompensaCliente);
    }

}
