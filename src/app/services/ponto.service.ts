import { Observable } from 'rxjs';
import { Ponto } from './../shared/model/ponto.model';
import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {API_URL_V1} from '../app.constants';
import {Recompensa} from "../shared/model/recompensa.model";
import {createRequestOption} from "../shared/util/request-util";
import {map} from "rxjs/operators";

@Injectable({ providedIn: 'root' })
export class PontoService {

    private NOME_ENTIDADE = 'pontos';

    constructor(protected http: HttpClient) {}

    getDataChart(ano: number): Promise<any[]> {
        return this.http.get<any[]>(`${API_URL_V1}/${this.NOME_ENTIDADE}/estatisticas/lucro_por_mes/${ano}`)
            .toPromise()
            .then(data => {
                return data;
            });
    }

    public create(ponto: Ponto): Observable<Ponto> {
        return this.http.post<Ponto>(`${API_URL_V1}/${this.NOME_ENTIDADE}`, ponto);
    }

    public getPontos(idCliente: number): Observable<number> {
        return this.http.get<number>(`${API_URL_V1}/${this.NOME_ENTIDADE}/pontos_cliente/${idCliente}`);
    }

    public getAll(query?: any): Observable<Ponto[]> {
        const option = createRequestOption(query);
        return this.http.get<Ponto[]>(`${API_URL_V1}/${this.NOME_ENTIDADE}`,  { params: option, observe: 'response' })
            .pipe(map(res => {
                return res.body['content'];
            }));
    }

    public find(id: number): Observable<Ponto> {
        return this.http.get<Ponto>(`${API_URL_V1}/${this.NOME_ENTIDADE}/${id}`);
    }

}
