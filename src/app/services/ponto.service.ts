import { Observable } from 'rxjs';
import { Ponto } from './../shared/model/ponto.model';
import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {API_URL_V1} from '../app.constants';

@Injectable({ providedIn: 'root' })
export class PontoService {

    private NOME_ENTIDADE = 'pontos';

    constructor(protected http: HttpClient) {}

    getDataChart(): Promise<any[]> {
        return this.http.get<any[]>(`${API_URL_V1}/${this.NOME_ENTIDADE}/estatisticas/lucro_por_mes/${2019}`)
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

}
